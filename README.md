

# 🔐 Login Automation Testing with Playwright
<img width="1335" height="357" alt="image" src="https://github.com/user-attachments/assets/c26d0419-85cd-42f6-82aa-df7a0365ae7c" />

## 📄 Description

This project demonstrates **end-to-end testing of a website login feature** using **[Playwright](https://playwright.dev/)**. It automates the process of:

* Navigating to the login page
* Entering user credentials
* Verifying login success or failure
* Handling edge cases like empty input or invalid credentials

The project uses the [OrangeHRM Demo Site](https://opensource-demo.orangehrmlive.com/) as the test target and serves as a foundation for UI automation testing in real-world web applications.

---

## ▶️ How to Run

1. **Clone the Repository**

```bash
git clone https://github.com/anu123538/automation-testing-orangehrm-login-using-playwright.git
```

2. **Navigate to the Project Folder**

```bash
cd automation-testing-orangehrm-login-using-playwright
```

3. **Install Dependencies**

```bash
npm install
```

4. **Run the Tests**

```bash
npx playwright test
```

5. **View Test Report (Optional)**

```bash
npx playwright show-report
```


## 📋 Test Cases Covered

| Test Case ID | Scenario               | Description                                        | Expected Result                            |
| ------------ | ---------------------- | -------------------------------------------------- | ------------------------------------------ |
| TC001        | Valid Login            | Login with correct username and password           | User is redirected to the dashboard        |



## 🧰 Tools & Technologies

* **Playwright** – End-to-end testing framework
* **JavaScript / TypeScript** – Scripting language
* **Node.js** – JavaScript runtime
* **VS Code** – Recommended IDE


## 👤 Author

**Anuththra**
QA Engineer | Automation Tester


## 📂 Folder Structure

```bash
├── tests/
│   └── login.spec.js         # Main test file
├── playwright.config.js      # Playwright configuration
├── package.json              # Project config and dependencies
└── README.md                 # Documentation



