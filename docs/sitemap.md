# APTRANSCO Website — Site Hierarchy & Sitemap

**Last Updated:** May 2026  
**Route prefix:** `https://aptransco.gov.in`

---

## Primary Navigation

```
/ — Home
├── /about — About APTRANSCO
│   ├── /about/vision-mission — Vision, Mission & Values
│   ├── /about/organization — Organization Chart
│   ├── /about/leadership — Board & Leadership
│   └── /about/contacts — Contact Directory (Head Office + 3 Zones + 12 Circles + Depts)
│
├── /network — Transmission Network (alias: /operations/network)
│   ├── /projects — Capital Projects (alias: /operations/projects)
│   ├── /grid-map — Interactive Grid Map
│   └── /vendor — Vendor & Contractor Information
│
├── /tenders — Tenders
│   └── /tenders/:id — Tender Detail
│
├── /notifications — Notifications & News
│   └── /notifications/:id — Notification Detail
│       Tabs: All | Circulars | Orders | Press Releases | Recruitment | General
│       Deep-link: /notifications?tab=press-release
│
├── /documents — Document Library
│   ├── /reports/annual — Annual Reports
│   └── /reports/power-sector — Power Sector Reports
│
├── /departments — Departments
│   ├── /departments/telecom-it — Telecom & IT
│   ├── /departments/grid-transmission — Grid Transmission
│   ├── /departments/projects — Projects Department
│   ├── /departments/finance — Finance & Accounts
│   ├── /departments/hr-admin — HR & Administration
│   └── /departments/training — Training & PRTI
│
├── /careers — Careers & Recruitment
│
└── /contact — Contact & Feedback
```

## Compliance & Regulatory

```
/rti — RTI Disclosures
/regulatory — Tariff & Regulatory (APERC Orders)
/regulatory-compliance — Regulatory Compliance Framework
/safety — Safety Standards
```

## Stakeholder Services

```
/vendor — Vendor & Contractor Information   ← Section 6.1 of PDF
/training — PRTI Training Programmes
/employees — Employee Portal
```

## Utility Pages

```
/search — Search Results
/faq — Frequently Asked Questions
/links — Important External Links
/sitemap — Full Sitemap (this document rendered as web page)
```

## Legal Pages

```
/privacy-policy — Privacy Policy
/disclaimer — Disclaimer
/accessibility — Accessibility Statement
```

## Developer Reference (not indexed)

```
/style-guide — Design System Style Guide (dev only)
```

---

## Navigation → Page Mapping

| Nav Label | Primary Route | Notes |
|---|---|---|
| About | /about | Dropdown with 5 children |
| Operations | /network | Dropdown with 4 children incl. Vendor |
| Tenders | /tenders | Flat link |
| Notifications & News | /notifications | Flat link; ?tab= deep-link supported |
| Reports | /documents | Dropdown with 3 children |
| Departments | /departments/telecom-it | Dropdown with 6 children |
| Compliance | /rti | Dropdown with 3 children |
| Careers | /careers | Flat link |
| Contact | /contact | Flat link |

---

## Total Pages: 37 routes across 13 sections
