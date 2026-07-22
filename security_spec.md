# Security Specifications for WE-ERA Connect Database

## 1. Data Invariants

*   **Inquiries (/inquiries/{id})**:
    *   `name`: Non-empty string, length <= 128 chars.
    *   `email`: Valid format, <= 128 chars.
    *   `category`: In approved list (General Inquiry, Attendance Registry, Emiratisation Fellowship, WE-Shark Tank AED 1M, Press & Media Accreditation).
    *   `message`: Non-empty, <= 1000 chars.
    *   `createdAt`: Server timestamp.
    *   No updates or deletions allowed. Only creation.

*   **Registrations (/registrations/{id})**:
    *   `name`: Non-empty string, length <= 128 chars.
    *   `email`: Valid email string, <= 128 chars.
    *   `passType`: "delegate" | "vip" | "academic".
    *   `paymentStatus`: "paid" | "pending" | "failed".
    *   `paymentMethod`: "card" | "apple_pay" | "google_pay".
    *   `amount`: Valid positive numeric value.
    *   `transactionId`: Secure uppercase transaction string.
    *   No updates/deletions allowed.

*   **Fellowships (/fellowships/{id})**:
    *   `nameEn`: Non-empty English name, <= 128 chars.
    *   `email`: Valid email, <= 128 chars.
    *   `abstract`: Non-empty research summary, <= 2000 chars.
    *   `refId`: String, starts with "EMI-FEL-".
    *   No updates/deletions allowed.

*   **Pitches (/pitches/{id})**:
    *   `leadName`: Non-empty string, <= 128 chars.
    *   `email`: Valid email, <= 128 chars.
    *   `pitchTitle`: Non-empty pitch overview, <= 128 chars.
    *   `elevatorPitch`: Non-empty pitch summary, <= 2000 chars.
    *   `refId`: String, starts with "PIT-ST-".
    *   No updates/deletions allowed.

---

## 2. The "Dirty Dozen" Payloads

The following payloads violate data integrity or ownership rules and must be rejected:

1.  **Ghost Injection in Inquiries**: `{ name: "Malicious User", email: "attacker@spam.com", message: "spam", category: "General Inquiry", shadow_opt: "admin" }` (Shadow properties).
2.  **Giant ID Attack on Inquiries**: Custom ID greater than 1024 characters.
3.  **Client Time Hijacking**: Submitting a hardcoded `createdAt` in the past or future instead of `request.time`.
4.  **Negative Fee Hijacking on Registrations**: Submitting `amount: -500` to skew records.
5.  **Invalid Pass Type Selection**: Submitting `passType: "godmode"`.
6.  **Spoofing Payment Status**: Submitting a registration with `paymentStatus: "paid"` but without a valid transaction ID or matching amount.
7.  **Over-Length Abstract in Fellowship**: Submitting research description longer than limits.
8.  **Empty Name Abstract Submission**: Submitting abstracts without english principal name.
9.  **Arbitrary Key Insertion**: Adding fields outside schema spec to pitches or fellowships.
10. **Privilege Escalation on Read**: Attempting to grab list of all registered delegates without administrator checks.
11. **Malicious Pitch ID Manipulation**: Using non-alphanumeric IDs for pitches to poison key indices.
12. **Malicious State Transitioning**: Attempting to update or rewrite a completed registration.
