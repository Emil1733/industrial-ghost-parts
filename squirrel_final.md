# squirrelscan Audit Report

**URL:** http://localhost:3000  
**Date:** 2026-02-16T20:33:31.515Z  
**Pages:** 100  
**Version:** 0.0.38

## Health Score

| Category | Score |
|----------|-------|
| **Overall** | **64/100 (D)** |
| Security | 51/100 |
| Performance | 75/100 |
| Accessibility | 95/100 |
| Core SEO | 92/100 |
| URL Structure | 91/100 |
| Content | 93/100 |
| Social Media | 87/100 |
| Links | 89/100 |
| Crawlability | 98/100 |
| E-E-A-T | 85/100 |
| Internationalization | 100/100 |
| Images | 100/100 |
| Legal Compliance | 100/100 |
| Mobile | 100/100 |
| Structured Data | 100/100 |

## Summary

- **Passed:** 7453
- **Warnings:** 950
- **Failed:** 135

---

## Issues

### Crawlability

*0 error(s), 2 warning(s)*

#### Canonical Chain **[WARN]**

`crawl/canonical-chain`

> Checks for redirect chains on canonical URLs

**Solution:**

Canonical URLs should point directly to the final destination, not through redirects. Redirect chains waste crawl budget and dilute link equity. If your canonical URL redirects, update it to point to the final URL. Check that canonical URLs use the preferred protocol (https) and www/non-www version. Self-referencing canonicals should match the page URL exactly.

| Check | Status | Message |
|-------|--------|---------|
| page-redirect-chain | ! warn | Page redirects before content is served |

<details><summary><strong>page-redirect-chain:</strong> 1 page(s) affected</summary>

- [/](http://localhost:3000/)

</details>

<details><summary><strong>page-redirect-chain:</strong> 1 item(s)</summary>

- [http://localhost:3000 → http://localhost:3000/](http://localhost:3000)

</details>

---

#### Sitemap Coverage **[WARN]**

`crawl/sitemap-coverage`

> Checks for indexable pages that are not in the sitemap

**Solution:**

Your sitemap should include all pages you want search engines to index. Pages that are crawlable and indexable (no noindex, not blocked by robots.txt) should generally be in your sitemap. Missing pages may not be discovered or indexed efficiently. Use a sitemap generator that automatically includes all indexable pages, or manually add important pages.

| Check | Status | Message |
|-------|--------|---------|
| sitemap-orphans | ! warn | 519 sitemap URL(s) were not crawled |

<details><summary><strong>sitemap-orphans:</strong> 519 item(s)</summary>

- [http://localhost:3000/privacy](http://localhost:3000/privacy)
- [http://localhost:3000/audit/6ES7214-1BD23-0XB0](http://localhost:3000/audit/6ES7214-1BD23-0XB0)
- [http://localhost:3000/audit/6ES7214-2AD23-0XB0](http://localhost:3000/audit/6ES7214-2AD23-0XB0)
- [http://localhost:3000/audit/6ES7214-2BD23-0XB0](http://localhost:3000/audit/6ES7214-2BD23-0XB0)
- [http://localhost:3000/audit/6ES7216-2AD23-0XB0](http://localhost:3000/audit/6ES7216-2AD23-0XB0)
- [http://localhost:3000/audit/6ES7216-2BD23-0XB0](http://localhost:3000/audit/6ES7216-2BD23-0XB0)
- [http://localhost:3000/audit/6ES7221-1BF22-0XA0](http://localhost:3000/audit/6ES7221-1BF22-0XA0)
- [http://localhost:3000/audit/6ES7221-1BH22-0XA0](http://localhost:3000/audit/6ES7221-1BH22-0XA0)
- [http://localhost:3000/audit/6ES7222-1BF22-0XA0](http://localhost:3000/audit/6ES7222-1BF22-0XA0)
- [http://localhost:3000/audit/6ES7222-1HF22-0XA0](http://localhost:3000/audit/6ES7222-1HF22-0XA0)
- [http://localhost:3000/audit/6ES7223-1BF22-0XA0](http://localhost:3000/audit/6ES7223-1BF22-0XA0)
- [http://localhost:3000/audit/6ES7223-1BH22-0XA0](http://localhost:3000/audit/6ES7223-1BH22-0XA0)
- [http://localhost:3000/audit/6ES7223-1BL22-0XA0](http://localhost:3000/audit/6ES7223-1BL22-0XA0)
- [http://localhost:3000/audit/6ES7223-1BM22-0XA0](http://localhost:3000/audit/6ES7223-1BM22-0XA0)
- [http://localhost:3000/audit/6ES7231-0HC22-0XA0](http://localhost:3000/audit/6ES7231-0HC22-0XA0)
- [http://localhost:3000/audit/6ES7235-0KD22-0XA0](http://localhost:3000/audit/6ES7235-0KD22-0XA0)
- [http://localhost:3000/audit/6ES7232-0HB22-0XA0](http://localhost:3000/audit/6ES7232-0HB22-0XA0)
- [http://localhost:3000/audit/6ES7231-7PB22-0XA0](http://localhost:3000/audit/6ES7231-7PB22-0XA0)
- [http://localhost:3000/audit/6ES7231-7PD22-0XA0](http://localhost:3000/audit/6ES7231-7PD22-0XA0)
- [http://localhost:3000/audit/UDC3500](http://localhost:3000/audit/UDC3500)
- [http://localhost:3000/audit/51453143-501](http://localhost:3000/audit/51453143-501)
- [http://localhost:3000/audit/51452758-502](http://localhost:3000/audit/51452758-502)
- [http://localhost:3000/audit/50004634-501](http://localhost:3000/audit/50004634-501)
- [http://localhost:3000/audit/51452845-501](http://localhost:3000/audit/51452845-501)
- [http://localhost:3000/audit/51452831-501](http://localhost:3000/audit/51452831-501)
- [http://localhost:3000/audit/30731996-506](http://localhost:3000/audit/30731996-506)
- [http://localhost:3000/audit/OW16](http://localhost:3000/audit/OW16)
- [http://localhost:3000/audit/NO4I](http://localhost:3000/audit/NO4I)
- [http://localhost:3000/audit/EN2T](http://localhost:3000/audit/EN2T)
- [http://localhost:3000/audit/IF16](http://localhost:3000/audit/IF16)
- [http://localhost:3000/audit/H008](http://localhost:3000/audit/H008)
- [http://localhost:3000/audit/BC02](http://localhost:3000/audit/BC02)
- [http://localhost:3000/audit/700S](http://localhost:3000/audit/700S)
- [http://localhost:3000/audit/6ES7315-2AF03-0AB0](http://localhost:3000/audit/6ES7315-2AF03-0AB0)
- [http://localhost:3000/audit/6ES7314-1AE04-0AB0](http://localhost:3000/audit/6ES7314-1AE04-0AB0)
- [http://localhost:3000/audit/6ES7951-0KG00-0AA0](http://localhost:3000/audit/6ES7951-0KG00-0AA0)
- [http://localhost:3000/audit/6ES7951-1KL00-0AA0](http://localhost:3000/audit/6ES7951-1KL00-0AA0)
- [http://localhost:3000/audit/IN16](http://localhost:3000/audit/IN16)
- [http://localhost:3000/audit/IO12DC](http://localhost:3000/audit/IO12DC)
- [http://localhost:3000/audit/0W16](http://localhost:3000/audit/0W16)
- [http://localhost:3000/audit/N04I](http://localhost:3000/audit/N04I)
- [http://localhost:3000/audit/M02AS](http://localhost:3000/audit/M02AS)
- [http://localhost:3000/audit/M02AE](http://localhost:3000/audit/M02AE)
- [http://localhost:3000/audit/ENT2](http://localhost:3000/audit/ENT2)
- [http://localhost:3000/audit/IF16I](http://localhost:3000/audit/IF16I)
- [http://localhost:3000/audit/L61B](http://localhost:3000/audit/L61B)
- [http://localhost:3000/audit/IF16A](http://localhost:3000/audit/IF16A)
- [http://localhost:3000/audit/OW161](http://localhost:3000/audit/OW161)
- [http://localhost:3000/audit/0W16I](http://localhost:3000/audit/0W16I)
- [http://localhost:3000/audit/EN2TR](http://localhost:3000/audit/EN2TR)
- [http://localhost:3000/audit/DC3200](http://localhost:3000/audit/DC3200)
- [http://localhost:3000/audit/0L00](http://localhost:3000/audit/0L00)
- [http://localhost:3000/audit/C300](http://localhost:3000/audit/C300)
- [http://localhost:3000/audit/BC01](http://localhost:3000/audit/BC01)
- [http://localhost:3000/audit/SP15D](http://localhost:3000/audit/SP15D)
- [http://localhost:3000/audit/SJT10](http://localhost:3000/audit/SJT10)
- [http://localhost:3000/audit/AC09](http://localhost:3000/audit/AC09)
- [http://localhost:3000/audit/BM03](http://localhost:3000/audit/BM03)
- [http://localhost:3000/audit/UM001](http://localhost:3000/audit/UM001)
- [http://localhost:3000/audit/UM002](http://localhost:3000/audit/UM002)
- [http://localhost:3000/audit/700H](http://localhost:3000/audit/700H)
- [http://localhost:3000/audit/700VC](http://localhost:3000/audit/700VC)
- [http://localhost:3000/audit/D096](http://localhost:3000/audit/D096)
- [http://localhost:3000/audit/TAI0X02](http://localhost:3000/audit/TAI0X02)
- [http://localhost:3000/audit/B0631T](http://localhost:3000/audit/B0631T)
- [http://localhost:3000/audit/B310P](http://localhost:3000/audit/B310P)
- [http://localhost:3000/audit/1756-IA8D%2FA](http://localhost:3000/audit/1756-IA8D%2FA)
- [http://localhost:3000/audit/1756-IA8D%2FB](http://localhost:3000/audit/1756-IA8D%2FB)
- [http://localhost:3000/audit/1756-IA16%2FA](http://localhost:3000/audit/1756-IA16%2FA)
- [http://localhost:3000/audit/1756-IA16%2FB](http://localhost:3000/audit/1756-IA16%2FB)
- [http://localhost:3000/audit/1756-IA16I%2FA](http://localhost:3000/audit/1756-IA16I%2FA)
- [http://localhost:3000/audit/1756-IA16I%2FB](http://localhost:3000/audit/1756-IA16I%2FB)
- [http://localhost:3000/audit/1756-IA32%2FA](http://localhost:3000/audit/1756-IA32%2FA)
- [http://localhost:3000/audit/1756-IA32%2FB](http://localhost:3000/audit/1756-IA32%2FB)
- [http://localhost:3000/audit/1756-IM16I%2FA](http://localhost:3000/audit/1756-IM16I%2FA)
- [http://localhost:3000/audit/1756-IM16I%2FB](http://localhost:3000/audit/1756-IM16I%2FB)
- [http://localhost:3000/audit/1756-IN16%2FA](http://localhost:3000/audit/1756-IN16%2FA)
- [http://localhost:3000/audit/1756-IN16%2FB](http://localhost:3000/audit/1756-IN16%2FB)
- [http://localhost:3000/audit/1756-OA8%2FA](http://localhost:3000/audit/1756-OA8%2FA)
- [http://localhost:3000/audit/1756-OA8%2FB](http://localhost:3000/audit/1756-OA8%2FB)
- [http://localhost:3000/audit/1756-OA8D%2FA](http://localhost:3000/audit/1756-OA8D%2FA)
- [http://localhost:3000/audit/1756-OA8D%2FB](http://localhost:3000/audit/1756-OA8D%2FB)
- [http://localhost:3000/audit/1756-OA8E%2FA](http://localhost:3000/audit/1756-OA8E%2FA)
- [http://localhost:3000/audit/1756-OA8E%2FB](http://localhost:3000/audit/1756-OA8E%2FB)
- [http://localhost:3000/audit/1756-OA16%2FA](http://localhost:3000/audit/1756-OA16%2FA)
- [http://localhost:3000/audit/1756-OA16%2FB](http://localhost:3000/audit/1756-OA16%2FB)
- [http://localhost:3000/audit/1756-OA16I%2FA](http://localhost:3000/audit/1756-OA16I%2FA)
- [http://localhost:3000/audit/1756-OA16I%2FB](http://localhost:3000/audit/1756-OA16I%2FB)
- [http://localhost:3000/audit/1756-ON8%2FA](http://localhost:3000/audit/1756-ON8%2FA)
- [http://localhost:3000/audit/1756-ON8%2FB](http://localhost:3000/audit/1756-ON8%2FB)
- [http://localhost:3000/audit/1756-IB16%2FA](http://localhost:3000/audit/1756-IB16%2FA)
- [http://localhost:3000/audit/1756-IB16%2FB](http://localhost:3000/audit/1756-IB16%2FB)
- [http://localhost:3000/audit/1756-IB16D%2FA](http://localhost:3000/audit/1756-IB16D%2FA)
- [http://localhost:3000/audit/1756-IB16D%2FB](http://localhost:3000/audit/1756-IB16D%2FB)
- [http://localhost:3000/audit/1756-IB16I%2FA](http://localhost:3000/audit/1756-IB16I%2FA)
- [http://localhost:3000/audit/1756-IB16I%2FB](http://localhost:3000/audit/1756-IB16I%2FB)
- [http://localhost:3000/audit/1756-IB16IF%2FA](http://localhost:3000/audit/1756-IB16IF%2FA)
- [http://localhost:3000/audit/1756-IB16IF%2FB](http://localhost:3000/audit/1756-IB16IF%2FB)
- [http://localhost:3000/audit/1756-IB16ISOE%2FA](http://localhost:3000/audit/1756-IB16ISOE%2FA)
- [http://localhost:3000/audit/1756-IB16ISOE%2FB](http://localhost:3000/audit/1756-IB16ISOE%2FB)
- [http://localhost:3000/audit/1756-IB32%2FA](http://localhost:3000/audit/1756-IB32%2FA)
- [http://localhost:3000/audit/1756-IB32%2FB](http://localhost:3000/audit/1756-IB32%2FB)
- [http://localhost:3000/audit/1756-IC16%2FA](http://localhost:3000/audit/1756-IC16%2FA)
- [http://localhost:3000/audit/1756-IC16%2FB](http://localhost:3000/audit/1756-IC16%2FB)
- [http://localhost:3000/audit/1756-IG16%2FA](http://localhost:3000/audit/1756-IG16%2FA)
- [http://localhost:3000/audit/1756-IG16%2FB](http://localhost:3000/audit/1756-IG16%2FB)
- [http://localhost:3000/audit/1756-IH16I%2FA](http://localhost:3000/audit/1756-IH16I%2FA)
- [http://localhost:3000/audit/1756-IH16I%2FB](http://localhost:3000/audit/1756-IH16I%2FB)
- [http://localhost:3000/audit/1756-IV16%2FA](http://localhost:3000/audit/1756-IV16%2FA)
- [http://localhost:3000/audit/1756-IV16%2FB](http://localhost:3000/audit/1756-IV16%2FB)
- [http://localhost:3000/audit/1756-IV32%2FA](http://localhost:3000/audit/1756-IV32%2FA)
- [http://localhost:3000/audit/1756-IV32%2FB](http://localhost:3000/audit/1756-IV32%2FB)
- [http://localhost:3000/audit/1756-OB8%2FA](http://localhost:3000/audit/1756-OB8%2FA)
- [http://localhost:3000/audit/1756-OB8%2FB](http://localhost:3000/audit/1756-OB8%2FB)
- [http://localhost:3000/audit/1756-OB8EI%2FA](http://localhost:3000/audit/1756-OB8EI%2FA)
- [http://localhost:3000/audit/1756-OB8EI%2FB](http://localhost:3000/audit/1756-OB8EI%2FB)
- [http://localhost:3000/audit/1756-OB8I%2FA](http://localhost:3000/audit/1756-OB8I%2FA)
- [http://localhost:3000/audit/1756-OB8I%2FB](http://localhost:3000/audit/1756-OB8I%2FB)
- [http://localhost:3000/audit/1756-OB16D%2FA](http://localhost:3000/audit/1756-OB16D%2FA)
- [http://localhost:3000/audit/1756-OB16D%2FB](http://localhost:3000/audit/1756-OB16D%2FB)
- [http://localhost:3000/audit/1756-OB16E%2FA](http://localhost:3000/audit/1756-OB16E%2FA)
- [http://localhost:3000/audit/1756-OB16E%2FB](http://localhost:3000/audit/1756-OB16E%2FB)
- [http://localhost:3000/audit/1756-OB16I%2FA](http://localhost:3000/audit/1756-OB16I%2FA)
- [http://localhost:3000/audit/1756-OB16I%2FB](http://localhost:3000/audit/1756-OB16I%2FB)
- [http://localhost:3000/audit/1756-OB16IEF%2FA](http://localhost:3000/audit/1756-OB16IEF%2FA)
- [http://localhost:3000/audit/1756-OB16IEF%2FB](http://localhost:3000/audit/1756-OB16IEF%2FB)
- [http://localhost:3000/audit/1756-OB32%2FA](http://localhost:3000/audit/1756-OB32%2FA)
- [http://localhost:3000/audit/1756-OB32%2FB](http://localhost:3000/audit/1756-OB32%2FB)
- [http://localhost:3000/audit/1756-OC8%2FA](http://localhost:3000/audit/1756-OC8%2FA)
- [http://localhost:3000/audit/1756-OC8%2FB](http://localhost:3000/audit/1756-OC8%2FB)
- [http://localhost:3000/audit/1756-OG16%2FA](http://localhost:3000/audit/1756-OG16%2FA)
- [http://localhost:3000/audit/1756-OG16%2FB](http://localhost:3000/audit/1756-OG16%2FB)
- [http://localhost:3000/audit/1756-OH8I%2FA](http://localhost:3000/audit/1756-OH8I%2FA)
- [http://localhost:3000/audit/1756-OH8I%2FB](http://localhost:3000/audit/1756-OH8I%2FB)
- [http://localhost:3000/audit/1756-OV16E%2FA](http://localhost:3000/audit/1756-OV16E%2FA)
- [http://localhost:3000/audit/1756-OV16E%2FB](http://localhost:3000/audit/1756-OV16E%2FB)
- [http://localhost:3000/audit/1756-IF8%2FA](http://localhost:3000/audit/1756-IF8%2FA)
- [http://localhost:3000/audit/1756-IF8%2FB](http://localhost:3000/audit/1756-IF8%2FB)
- [http://localhost:3000/audit/1756-IF8I%2FA](http://localhost:3000/audit/1756-IF8I%2FA)
- [http://localhost:3000/audit/1756-IF8I%2FB](http://localhost:3000/audit/1756-IF8I%2FB)
- [http://localhost:3000/audit/1756-IF16%2FA](http://localhost:3000/audit/1756-IF16%2FA)
- [http://localhost:3000/audit/1756-IF16%2FB](http://localhost:3000/audit/1756-IF16%2FB)
- [http://localhost:3000/audit/1756-IF16I%2FA](http://localhost:3000/audit/1756-IF16I%2FA)
- [http://localhost:3000/audit/1756-IF16I%2FB](http://localhost:3000/audit/1756-IF16I%2FB)
- [http://localhost:3000/audit/1756-IR6I%2FA](http://localhost:3000/audit/1756-IR6I%2FA)
- [http://localhost:3000/audit/1756-IR6I%2FB](http://localhost:3000/audit/1756-IR6I%2FB)
- [http://localhost:3000/audit/1756-IRT8I%2FA](http://localhost:3000/audit/1756-IRT8I%2FA)
- [http://localhost:3000/audit/1756-IRT8I%2FB](http://localhost:3000/audit/1756-IRT8I%2FB)
- [http://localhost:3000/audit/1756-IR12%2FA](http://localhost:3000/audit/1756-IR12%2FA)
- [http://localhost:3000/audit/1756-IR12%2FB](http://localhost:3000/audit/1756-IR12%2FB)
- [http://localhost:3000/audit/1756-IT6I%2FA](http://localhost:3000/audit/1756-IT6I%2FA)
- [http://localhost:3000/audit/1756-IT6I%2FB](http://localhost:3000/audit/1756-IT6I%2FB)
- [http://localhost:3000/audit/1756-IT16%2FA](http://localhost:3000/audit/1756-IT16%2FA)
- [http://localhost:3000/audit/1756-IT16%2FB](http://localhost:3000/audit/1756-IT16%2FB)
- [http://localhost:3000/audit/1756-OF4%2FA](http://localhost:3000/audit/1756-OF4%2FA)
- [http://localhost:3000/audit/1756-OF4%2FB](http://localhost:3000/audit/1756-OF4%2FB)
- [http://localhost:3000/audit/1756-OF8%2FA](http://localhost:3000/audit/1756-OF8%2FA)
- [http://localhost:3000/audit/1756-OF8%2FB](http://localhost:3000/audit/1756-OF8%2FB)
- [http://localhost:3000/audit/1756-OF8I%2FA](http://localhost:3000/audit/1756-OF8I%2FA)
- [http://localhost:3000/audit/1756-OF8I%2FB](http://localhost:3000/audit/1756-OF8I%2FB)
- [http://localhost:3000/audit/1756-EWEB%2FA](http://localhost:3000/audit/1756-EWEB%2FA)
- [http://localhost:3000/audit/1756-EWEB%2FB](http://localhost:3000/audit/1756-EWEB%2FB)
- [http://localhost:3000/audit/1756-DHRIO%2FA](http://localhost:3000/audit/1756-DHRIO%2FA)
- [http://localhost:3000/audit/1756-DHRIO%2FB](http://localhost:3000/audit/1756-DHRIO%2FB)
- [http://localhost:3000/audit/1756-ENBT%2FA](http://localhost:3000/audit/1756-ENBT%2FA)
- [http://localhost:3000/audit/1756-ENBT%2FB](http://localhost:3000/audit/1756-ENBT%2FB)
- [http://localhost:3000/audit/1756-CNB%2FA](http://localhost:3000/audit/1756-CNB%2FA)
- [http://localhost:3000/audit/1756-CNB%2FB](http://localhost:3000/audit/1756-CNB%2FB)
- [http://localhost:3000/audit/1756-CNBR%2FA](http://localhost:3000/audit/1756-CNBR%2FA)
- [http://localhost:3000/audit/1756-CNBR%2FB](http://localhost:3000/audit/1756-CNBR%2FB)
- [http://localhost:3000/audit/1756-DNB%2FA](http://localhost:3000/audit/1756-DNB%2FA)
- [http://localhost:3000/audit/1756-DNB%2FB](http://localhost:3000/audit/1756-DNB%2FB)
- [http://localhost:3000/audit/1756-L61%2FA](http://localhost:3000/audit/1756-L61%2FA)
- [http://localhost:3000/audit/1756-L61%2FB](http://localhost:3000/audit/1756-L61%2FB)
- [http://localhost:3000/audit/1756-L62%2FA](http://localhost:3000/audit/1756-L62%2FA)
- [http://localhost:3000/audit/1756-L62%2FB](http://localhost:3000/audit/1756-L62%2FB)
- [http://localhost:3000/audit/1756-L63%2FA](http://localhost:3000/audit/1756-L63%2FA)
- [http://localhost:3000/audit/1756-L63%2FB](http://localhost:3000/audit/1756-L63%2FB)
- [http://localhost:3000/audit/1756-L55%2FA](http://localhost:3000/audit/1756-L55%2FA)
- [http://localhost:3000/audit/1756-L55%2FB](http://localhost:3000/audit/1756-L55%2FB)
- [http://localhost:3000/audit/1747-L531%2FA](http://localhost:3000/audit/1747-L531%2FA)
- [http://localhost:3000/audit/1747-L531%2FB](http://localhost:3000/audit/1747-L531%2FB)
- [http://localhost:3000/audit/1746-IA8%2FA](http://localhost:3000/audit/1746-IA8%2FA)
- [http://localhost:3000/audit/1746-IA8%2FB](http://localhost:3000/audit/1746-IA8%2FB)
- [http://localhost:3000/audit/1746-IB8%2FA](http://localhost:3000/audit/1746-IB8%2FA)
- [http://localhost:3000/audit/1746-IB8%2FB](http://localhost:3000/audit/1746-IB8%2FB)
- [http://localhost:3000/audit/1746-IN16%2FA](http://localhost:3000/audit/1746-IN16%2FA)
- [http://localhost:3000/audit/1746-IN16%2FB](http://localhost:3000/audit/1746-IN16%2FB)
- [http://localhost:3000/audit/1746-IO12DC%2FA](http://localhost:3000/audit/1746-IO12DC%2FA)
- [http://localhost:3000/audit/1746-IO12DC%2FB](http://localhost:3000/audit/1746-IO12DC%2FB)
- [http://localhost:3000/audit/1746-OB8%2FA](http://localhost:3000/audit/1746-OB8%2FA)
- [http://localhost:3000/audit/1746-OB8%2FB](http://localhost:3000/audit/1746-OB8%2FB)
- [http://localhost:3000/audit/1746-HSCE2%2FA](http://localhost:3000/audit/1746-HSCE2%2FA)
- [http://localhost:3000/audit/1746-HSCE2%2FB](http://localhost:3000/audit/1746-HSCE2%2FB)
- [http://localhost:3000/audit/1746-BTM%2FA](http://localhost:3000/audit/1746-BTM%2FA)
- [http://localhost:3000/audit/1746-BTM%2FB](http://localhost:3000/audit/1746-BTM%2FB)
- [http://localhost:3000/audit/1746-HSCE%2FA](http://localhost:3000/audit/1746-HSCE%2FA)
- [http://localhost:3000/audit/1746-HSCE%2FB](http://localhost:3000/audit/1746-HSCE%2FB)
- [http://localhost:3000/audit/1746-HSTP1%2FA](http://localhost:3000/audit/1746-HSTP1%2FA)
- [http://localhost:3000/audit/1746-HSTP1%2FB](http://localhost:3000/audit/1746-HSTP1%2FB)
- [http://localhost:3000/audit/1746-QS%2FA](http://localhost:3000/audit/1746-QS%2FA)
- [http://localhost:3000/audit/1746-QS%2FB](http://localhost:3000/audit/1746-QS%2FB)
- [http://localhost:3000/audit/1746-QV%2FA](http://localhost:3000/audit/1746-QV%2FA)
- [http://localhost:3000/audit/1746-QV%2FB](http://localhost:3000/audit/1746-QV%2FB)
- [http://localhost:3000/audit/1747-SCNR%2FA](http://localhost:3000/audit/1747-SCNR%2FA)
- [http://localhost:3000/audit/1747-SCNR%2FB](http://localhost:3000/audit/1747-SCNR%2FB)
- [http://localhost:3000/audit/1747-SDN%2FA](http://localhost:3000/audit/1747-SDN%2FA)
- [http://localhost:3000/audit/1747-SDN%2FB](http://localhost:3000/audit/1747-SDN%2FB)
- [http://localhost:3000/audit/1747-SN%2FA](http://localhost:3000/audit/1747-SN%2FA)
- [http://localhost:3000/audit/1747-SN%2FB](http://localhost:3000/audit/1747-SN%2FB)
- [http://localhost:3000/audit/1746-NI8%2FA](http://localhost:3000/audit/1746-NI8%2FA)
- [http://localhost:3000/audit/1746-NI8%2FB](http://localhost:3000/audit/1746-NI8%2FB)
- [http://localhost:3000/audit/1746-NIO4V%2FA](http://localhost:3000/audit/1746-NIO4V%2FA)
- [http://localhost:3000/audit/1746-NIO4V%2FB](http://localhost:3000/audit/1746-NIO4V%2FB)
- [http://localhost:3000/audit/1746-NIO4I%2FA](http://localhost:3000/audit/1746-NIO4I%2FA)
- [http://localhost:3000/audit/1746-NIO4I%2FB](http://localhost:3000/audit/1746-NIO4I%2FB)
- [http://localhost:3000/audit/1746-NO4I%2FA](http://localhost:3000/audit/1746-NO4I%2FA)
- [http://localhost:3000/audit/1746-NO4I%2FB](http://localhost:3000/audit/1746-NO4I%2FB)
- [http://localhost:3000/audit/1746-NO4V%2FA](http://localhost:3000/audit/1746-NO4V%2FA)
- [http://localhost:3000/audit/1746-NO4V%2FB](http://localhost:3000/audit/1746-NO4V%2FB)
- [http://localhost:3000/audit/6ES7212-1AB23-0XB0%2FA](http://localhost:3000/audit/6ES7212-1AB23-0XB0%2FA)
- [http://localhost:3000/audit/6ES7212-1AB23-0XB0%2FB](http://localhost:3000/audit/6ES7212-1AB23-0XB0%2FB)
- [http://localhost:3000/audit/6ES7212-1BB23-0XB0%2FA](http://localhost:3000/audit/6ES7212-1BB23-0XB0%2FA)
- [http://localhost:3000/audit/6ES7212-1BB23-0XB0%2FB](http://localhost:3000/audit/6ES7212-1BB23-0XB0%2FB)
- [http://localhost:3000/audit/6ES7214-1AD23-0XB0%2FA](http://localhost:3000/audit/6ES7214-1AD23-0XB0%2FA)
- [http://localhost:3000/audit/6ES7214-1AD23-0XB0%2FB](http://localhost:3000/audit/6ES7214-1AD23-0XB0%2FB)
- [http://localhost:3000/audit/6ES7214-1BD23-0XB0%2FA](http://localhost:3000/audit/6ES7214-1BD23-0XB0%2FA)
- [http://localhost:3000/audit/6ES7214-1BD23-0XB0%2FB](http://localhost:3000/audit/6ES7214-1BD23-0XB0%2FB)
- [http://localhost:3000/audit/6ES7214-2AD23-0XB0%2FA](http://localhost:3000/audit/6ES7214-2AD23-0XB0%2FA)
- [http://localhost:3000/audit/6ES7214-2AD23-0XB0%2FB](http://localhost:3000/audit/6ES7214-2AD23-0XB0%2FB)
- [http://localhost:3000/audit/6ES7214-2BD23-0XB0%2FA](http://localhost:3000/audit/6ES7214-2BD23-0XB0%2FA)
- [http://localhost:3000/audit/6ES7214-2BD23-0XB0%2FB](http://localhost:3000/audit/6ES7214-2BD23-0XB0%2FB)
- [http://localhost:3000/audit/6ES7216-2AD23-0XB0%2FA](http://localhost:3000/audit/6ES7216-2AD23-0XB0%2FA)
- [http://localhost:3000/audit/6ES7216-2AD23-0XB0%2FB](http://localhost:3000/audit/6ES7216-2AD23-0XB0%2FB)
- [http://localhost:3000/audit/6ES7216-2BD23-0XB0%2FA](http://localhost:3000/audit/6ES7216-2BD23-0XB0%2FA)
- [http://localhost:3000/audit/6ES7216-2BD23-0XB0%2FB](http://localhost:3000/audit/6ES7216-2BD23-0XB0%2FB)
- [http://localhost:3000/audit/6ES7221-1BF22-0XA0%2FA](http://localhost:3000/audit/6ES7221-1BF22-0XA0%2FA)
- [http://localhost:3000/audit/6ES7221-1BF22-0XA0%2FB](http://localhost:3000/audit/6ES7221-1BF22-0XA0%2FB)
- [http://localhost:3000/audit/6ES7221-1BH22-0XA0%2FA](http://localhost:3000/audit/6ES7221-1BH22-0XA0%2FA)
- [http://localhost:3000/audit/6ES7221-1BH22-0XA0%2FB](http://localhost:3000/audit/6ES7221-1BH22-0XA0%2FB)
- [http://localhost:3000/audit/6ES7222-1BF22-0XA0%2FA](http://localhost:3000/audit/6ES7222-1BF22-0XA0%2FA)
- [http://localhost:3000/audit/6ES7222-1BF22-0XA0%2FB](http://localhost:3000/audit/6ES7222-1BF22-0XA0%2FB)
- [http://localhost:3000/audit/6ES7222-1HF22-0XA0%2FA](http://localhost:3000/audit/6ES7222-1HF22-0XA0%2FA)
- [http://localhost:3000/audit/6ES7222-1HF22-0XA0%2FB](http://localhost:3000/audit/6ES7222-1HF22-0XA0%2FB)
- [http://localhost:3000/audit/6ES7223-1BF22-0XA0%2FA](http://localhost:3000/audit/6ES7223-1BF22-0XA0%2FA)
- [http://localhost:3000/audit/6ES7223-1BF22-0XA0%2FB](http://localhost:3000/audit/6ES7223-1BF22-0XA0%2FB)
- [http://localhost:3000/audit/6ES7223-1BH22-0XA0%2FA](http://localhost:3000/audit/6ES7223-1BH22-0XA0%2FA)
- [http://localhost:3000/audit/6ES7223-1BH22-0XA0%2FB](http://localhost:3000/audit/6ES7223-1BH22-0XA0%2FB)
- [http://localhost:3000/audit/6ES7223-1BL22-0XA0%2FA](http://localhost:3000/audit/6ES7223-1BL22-0XA0%2FA)
- [http://localhost:3000/audit/6ES7223-1BL22-0XA0%2FB](http://localhost:3000/audit/6ES7223-1BL22-0XA0%2FB)
- [http://localhost:3000/audit/6ES7223-1BM22-0XA0%2FA](http://localhost:3000/audit/6ES7223-1BM22-0XA0%2FA)
- [http://localhost:3000/audit/6ES7223-1BM22-0XA0%2FB](http://localhost:3000/audit/6ES7223-1BM22-0XA0%2FB)
- [http://localhost:3000/audit/6ES7231-0HC22-0XA0%2FA](http://localhost:3000/audit/6ES7231-0HC22-0XA0%2FA)
- [http://localhost:3000/audit/6ES7231-0HC22-0XA0%2FB](http://localhost:3000/audit/6ES7231-0HC22-0XA0%2FB)
- [http://localhost:3000/audit/6ES7235-0KD22-0XA0%2FA](http://localhost:3000/audit/6ES7235-0KD22-0XA0%2FA)
- [http://localhost:3000/audit/6ES7235-0KD22-0XA0%2FB](http://localhost:3000/audit/6ES7235-0KD22-0XA0%2FB)
- [http://localhost:3000/audit/6ES7232-0HB22-0XA0%2FA](http://localhost:3000/audit/6ES7232-0HB22-0XA0%2FA)
- [http://localhost:3000/audit/6ES7232-0HB22-0XA0%2FB](http://localhost:3000/audit/6ES7232-0HB22-0XA0%2FB)
- [http://localhost:3000/audit/6ES7231-7PB22-0XA0%2FA](http://localhost:3000/audit/6ES7231-7PB22-0XA0%2FA)
- [http://localhost:3000/audit/6ES7231-7PB22-0XA0%2FB](http://localhost:3000/audit/6ES7231-7PB22-0XA0%2FB)
- [http://localhost:3000/audit/6ES7231-7PD22-0XA0%2FA](http://localhost:3000/audit/6ES7231-7PD22-0XA0%2FA)
- [http://localhost:3000/audit/6ES7231-7PD22-0XA0%2FB](http://localhost:3000/audit/6ES7231-7PD22-0XA0%2FB)
- [http://localhost:3000/audit/51453143-501%2FA](http://localhost:3000/audit/51453143-501%2FA)
- [http://localhost:3000/audit/51453143-501%2FB](http://localhost:3000/audit/51453143-501%2FB)
- [http://localhost:3000/audit/51452758-502%2FA](http://localhost:3000/audit/51452758-502%2FA)
- [http://localhost:3000/audit/51452758-502%2FB](http://localhost:3000/audit/51452758-502%2FB)
- [http://localhost:3000/audit/50004634-501%2FA](http://localhost:3000/audit/50004634-501%2FA)
- [http://localhost:3000/audit/50004634-501%2FB](http://localhost:3000/audit/50004634-501%2FB)
- [http://localhost:3000/audit/51452845-501%2FA](http://localhost:3000/audit/51452845-501%2FA)
- [http://localhost:3000/audit/51452845-501%2FB](http://localhost:3000/audit/51452845-501%2FB)
- [http://localhost:3000/audit/51452831-501%2FA](http://localhost:3000/audit/51452831-501%2FA)
- [http://localhost:3000/audit/51452831-501%2FB](http://localhost:3000/audit/51452831-501%2FB)
- [http://localhost:3000/audit/30731996-506%2FA](http://localhost:3000/audit/30731996-506%2FA)
- [http://localhost:3000/audit/30731996-506%2FB](http://localhost:3000/audit/30731996-506%2FB)
- [http://localhost:3000/audit/6ES7315-2AF03-0AB0%2FA](http://localhost:3000/audit/6ES7315-2AF03-0AB0%2FA)
- [http://localhost:3000/audit/6ES7315-2AF03-0AB0%2FB](http://localhost:3000/audit/6ES7315-2AF03-0AB0%2FB)
- [http://localhost:3000/audit/6ES7314-1AE04-0AB0%2FA](http://localhost:3000/audit/6ES7314-1AE04-0AB0%2FA)
- [http://localhost:3000/audit/6ES7314-1AE04-0AB0%2FB](http://localhost:3000/audit/6ES7314-1AE04-0AB0%2FB)
- [http://localhost:3000/audit/6ES7951-0KG00-0AA0%2FA](http://localhost:3000/audit/6ES7951-0KG00-0AA0%2FA)
- [http://localhost:3000/audit/6ES7951-0KG00-0AA0%2FB](http://localhost:3000/audit/6ES7951-0KG00-0AA0%2FB)
- [http://localhost:3000/audit/6ES7951-1KL00-0AA0%2FA](http://localhost:3000/audit/6ES7951-1KL00-0AA0%2FA)
- [http://localhost:3000/audit/6ES7951-1KL00-0AA0%2FB](http://localhost:3000/audit/6ES7951-1KL00-0AA0%2FB)
- [http://localhost:3000/audit/1756%20BA2%20BATTERY](http://localhost:3000/audit/1756%20BA2%20BATTERY)
- [http://localhost:3000/audit/LOGIX%205561](http://localhost:3000/audit/LOGIX%205561)
- [http://localhost:3000/audit/LOGIX5561](http://localhost:3000/audit/LOGIX5561)
- [http://localhost:3000/audit/1756%20HSC%20B](http://localhost:3000/audit/1756%20HSC%20B)
- [http://localhost:3000/audit/1756%20IF16I](http://localhost:3000/audit/1756%20IF16I)
- [http://localhost:3000/audit/1756OW16I](http://localhost:3000/audit/1756OW16I)
- [http://localhost:3000/audit/ROCKWELL%201756%20IF16](http://localhost:3000/audit/ROCKWELL%201756%20IF16)
- [http://localhost:3000/audit/EN2T%20CARD](http://localhost:3000/audit/EN2T%20CARD)
- [http://localhost:3000/audit/AB%201756%20BA2](http://localhost:3000/audit/AB%201756%20BA2)
- [http://localhost:3000/audit/AB%201756%20HSC](http://localhost:3000/audit/AB%201756%20HSC)
- [http://localhost:3000/audit/1756%20IF%2016](http://localhost:3000/audit/1756%20IF%2016)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%20EN2T](http://localhost:3000/audit/ALLEN%20BRADLEY%20EN2T)
- [http://localhost:3000/audit/1756%20L61B](http://localhost:3000/audit/1756%20L61B)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%201756%20HSC](http://localhost:3000/audit/ALLEN%20BRADLEY%201756%20HSC)
- [http://localhost:3000/audit/1756%20L61%20B](http://localhost:3000/audit/1756%20L61%20B)
- [http://localhost:3000/audit/1756%20IF16A](http://localhost:3000/audit/1756%20IF16A)
- [http://localhost:3000/audit/1756%20L61%20B%20LOGIX5561](http://localhost:3000/audit/1756%20L61%20B%20LOGIX5561)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%20LOGIX%205561](http://localhost:3000/audit/ALLEN%20BRADLEY%20LOGIX%205561)
- [http://localhost:3000/audit/AB%201756%20OW16I](http://localhost:3000/audit/AB%201756%20OW16I)
- [http://localhost:3000/audit/OW16I](http://localhost:3000/audit/OW16I)
- [http://localhost:3000/audit/1756%20L61%20CONTROLLOGIX%205561%20CONTROLLER](http://localhost:3000/audit/1756%20L61%20CONTROLLOGIX%205561%20CONTROLLER)
- [http://localhost:3000/audit/1756%20EN2T%20PRICE](http://localhost:3000/audit/1756%20EN2T%20PRICE)
- [http://localhost:3000/audit/1756%20M02AE%20A](http://localhost:3000/audit/1756%20M02AE%20A)
- [http://localhost:3000/audit/1756%20OW161](http://localhost:3000/audit/1756%20OW161)
- [http://localhost:3000/audit/1756%20IF16%20PRICE](http://localhost:3000/audit/1756%20IF16%20PRICE)
- [http://localhost:3000/audit/ROCKWELL%20EN2T](http://localhost:3000/audit/ROCKWELL%20EN2T)
- [http://localhost:3000/audit/5069%20IF16](http://localhost:3000/audit/5069%20IF16)
- [http://localhost:3000/audit/1756%20HSC%20A](http://localhost:3000/audit/1756%20HSC%20A)
- [http://localhost:3000/audit/1756%200W16I](http://localhost:3000/audit/1756%200W16I)
- [http://localhost:3000/audit/1756%20OW16I%20ALLEN%20BRADLEY](http://localhost:3000/audit/1756%20OW16I%20ALLEN%20BRADLEY)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%201756%20M02AE](http://localhost:3000/audit/ALLEN%20BRADLEY%201756%20M02AE)
- [http://localhost:3000/audit/1756%20BA1%20AND%201756%20BA2](http://localhost:3000/audit/1756%20BA1%20AND%201756%20BA2)
- [http://localhost:3000/audit/1756%20RELAY%20OUTPUT%20CARD](http://localhost:3000/audit/1756%20RELAY%20OUTPUT%20CARD)
- [http://localhost:3000/audit/AB%201756%20L61](http://localhost:3000/audit/AB%201756%20L61)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%20IF16](http://localhost:3000/audit/ALLEN%20BRADLEY%20IF16)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%20L61](http://localhost:3000/audit/ALLEN%20BRADLEY%20L61)
- [http://localhost:3000/audit/1756%20BA](http://localhost:3000/audit/1756%20BA)
- [http://localhost:3000/audit/1756%20BA2%20SPECIFICATIONS](http://localhost:3000/audit/1756%20BA2%20SPECIFICATIONS)
- [http://localhost:3000/audit/1756%20EN2T%20MODULE](http://localhost:3000/audit/1756%20EN2T%20MODULE)
- [http://localhost:3000/audit/1756%20EN2T%20SPECIFICATIONS](http://localhost:3000/audit/1756%20EN2T%20SPECIFICATIONS)
- [http://localhost:3000/audit/1756%20EN2TR%20ROCKWELL](http://localhost:3000/audit/1756%20EN2TR%20ROCKWELL)
- [http://localhost:3000/audit/1756%20HSC%20SPECIFICATIONS](http://localhost:3000/audit/1756%20HSC%20SPECIFICATIONS)
- [http://localhost:3000/audit/1756%20L61%20B%20LOGIX%205561](http://localhost:3000/audit/1756%20L61%20B%20LOGIX%205561)
- [http://localhost:3000/audit/1756%20L61%20PROCESSOR](http://localhost:3000/audit/1756%20L61%20PROCESSOR)
- [http://localhost:3000/audit/1756%20OW16I%20CONTACT%20RATING](http://localhost:3000/audit/1756%20OW16I%20CONTACT%20RATING)
- [http://localhost:3000/audit/1756%20OW16I%20DATASHEET](http://localhost:3000/audit/1756%20OW16I%20DATASHEET)
- [http://localhost:3000/audit/1756%20RM%20A](http://localhost:3000/audit/1756%20RM%20A)
- [http://localhost:3000/audit/1756%20RM%20B](http://localhost:3000/audit/1756%20RM%20B)
- [http://localhost:3000/audit/1771%20VHSC%20TO%201756%20HSC](http://localhost:3000/audit/1771%20VHSC%20TO%201756%20HSC)
- [http://localhost:3000/audit/1794%20IF16](http://localhost:3000/audit/1794%20IF16)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%205561](http://localhost:3000/audit/ALLEN%20BRADLEY%205561)
- [http://localhost:3000/audit/CONTROL%20LOGIX%205561](http://localhost:3000/audit/CONTROL%20LOGIX%205561)
- [http://localhost:3000/audit/CONTROLLOGIX%201756%20EN2T](http://localhost:3000/audit/CONTROLLOGIX%201756%20EN2T)
- [http://localhost:3000/audit/CONTROLLOGIX%201756%20L61](http://localhost:3000/audit/CONTROLLOGIX%201756%20L61)
- [http://localhost:3000/audit/CONTROLLOGIX%20HIGH%20SPEED%20COUNTER](http://localhost:3000/audit/CONTROLLOGIX%20HIGH%20SPEED%20COUNTER)
- [http://localhost:3000/audit/CONTROLLOGIX%20L61](http://localhost:3000/audit/CONTROLLOGIX%20L61)
- [http://localhost:3000/audit/EN2T%20MODULE](http://localhost:3000/audit/EN2T%20MODULE)
- [http://localhost:3000/audit/HYD02](http://localhost:3000/audit/HYD02)
- [http://localhost:3000/audit/LOGIX%205561%20PROCESSOR](http://localhost:3000/audit/LOGIX%205561%20PROCESSOR)
- [http://localhost:3000/audit/ROCKWELL%201756%20L61](http://localhost:3000/audit/ROCKWELL%201756%20L61)
- [http://localhost:3000/audit/UDC3200](http://localhost:3000/audit/UDC3200)
- [http://localhost:3000/audit/UDC2800](http://localhost:3000/audit/UDC2800)
- [http://localhost:3000/audit/DC2500%20EE](http://localhost:3000/audit/DC2500%20EE)
- [http://localhost:3000/audit/CLIPPERCREEK%20HCS%2060](http://localhost:3000/audit/CLIPPERCREEK%20HCS%2060)
- [http://localhost:3000/audit/HONEYWELL%20DC2500](http://localhost:3000/audit/HONEYWELL%20DC2500)
- [http://localhost:3000/audit/CLIPPER%20CREEK%20HCS%2060](http://localhost:3000/audit/CLIPPER%20CREEK%20HCS%2060)
- [http://localhost:3000/audit/HCS%2060](http://localhost:3000/audit/HCS%2060)
- [http://localhost:3000/audit/DC2500](http://localhost:3000/audit/DC2500)
- [http://localhost:3000/audit/UDC%202500](http://localhost:3000/audit/UDC%202500)
- [http://localhost:3000/audit/HONEYWELL%20DC3200](http://localhost:3000/audit/HONEYWELL%20DC3200)
- [http://localhost:3000/audit/HONEYWELL%20UDC%202500](http://localhost:3000/audit/HONEYWELL%20UDC%202500)
- [http://localhost:3000/audit/DC2500%20EE%200L00%20200](http://localhost:3000/audit/DC2500%20EE%200L00%20200)
- [http://localhost:3000/audit/HONEYWELL%20DC2500%20CONTROLLER](http://localhost:3000/audit/HONEYWELL%20DC2500%20CONTROLLER)
- [http://localhost:3000/audit/DC2500%20E0%200L00%20200](http://localhost:3000/audit/DC2500%20E0%200L00%20200)
- [http://localhost:3000/audit/DC2500%20EE%200L00%20100](http://localhost:3000/audit/DC2500%20EE%200L00%20100)
- [http://localhost:3000/audit/EXPERION%20C300](http://localhost:3000/audit/EXPERION%20C300)
- [http://localhost:3000/audit/HONEYWELL%202500](http://localhost:3000/audit/HONEYWELL%202500)
- [http://localhost:3000/audit/HONEYWELL%202500%20CONTROLLER](http://localhost:3000/audit/HONEYWELL%202500%20CONTROLLER)
- [http://localhost:3000/audit/HONEYWELL%203200%20CONTROLLER](http://localhost:3000/audit/HONEYWELL%203200%20CONTROLLER)
- [http://localhost:3000/audit/HONEYWELL%20EXPERION%20C300](http://localhost:3000/audit/HONEYWELL%20EXPERION%20C300)
- [http://localhost:3000/audit/2094%20BC01%20M01](http://localhost:3000/audit/2094%20BC01%20M01)
- [http://localhost:3000/audit/1336%20BDB%20SP15D](http://localhost:3000/audit/1336%20BDB%20SP15D)
- [http://localhost:3000/audit/1394%20SJT10%20C](http://localhost:3000/audit/1394%20SJT10%20C)
- [http://localhost:3000/audit/20BC072A0AYNANC0](http://localhost:3000/audit/20BC072A0AYNANC0)
- [http://localhost:3000/audit/2094%20BC01%20M01%20S](http://localhost:3000/audit/2094%20BC01%20M01%20S)
- [http://localhost:3000/audit/2094%20AC09%20M02%20S](http://localhost:3000/audit/2094%20AC09%20M02%20S)
- [http://localhost:3000/audit/2094%20BM03%20S](http://localhost:3000/audit/2094%20BM03%20S)
- [http://localhost:3000/audit/2094%20BC01%20M01%20M](http://localhost:3000/audit/2094%20BC01%20M01%20M)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%202094%20BC01%20M01%20S](http://localhost:3000/audit/ALLEN%20BRADLEY%202094%20BC01%20M01%20S)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%202198%20H008%20ERS](http://localhost:3000/audit/ALLEN%20BRADLEY%202198%20H008%20ERS)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%20KINETIX%206000](http://localhost:3000/audit/ALLEN%20BRADLEY%20KINETIX%206000)
- [http://localhost:3000/audit/20BD065A3AYNANC0](http://localhost:3000/audit/20BD065A3AYNANC0)
- [http://localhost:3000/audit/2198%20H008](http://localhost:3000/audit/2198%20H008)
- [http://localhost:3000/audit/2094%20UM001](http://localhost:3000/audit/2094%20UM001)
- [http://localhost:3000/audit/20B%20UM002](http://localhost:3000/audit/20B%20UM002)
- [http://localhost:3000/audit/20BD077A0AYNAND0](http://localhost:3000/audit/20BD077A0AYNAND0)
- [http://localhost:3000/audit/2198H008ERS](http://localhost:3000/audit/2198H008ERS)
- [http://localhost:3000/audit/AB%20KINETIX%206000](http://localhost:3000/audit/AB%20KINETIX%206000)
- [http://localhost:3000/audit/AB%20POWERFLEX%20700](http://localhost:3000/audit/AB%20POWERFLEX%20700)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%20700%20H](http://localhost:3000/audit/ALLEN%20BRADLEY%20700%20H)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%20KINETIX%206000%20E19](http://localhost:3000/audit/ALLEN%20BRADLEY%20KINETIX%206000%20E19)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%20POWERFLEX%20700H](http://localhost:3000/audit/ALLEN%20BRADLEY%20POWERFLEX%20700H)
- [http://localhost:3000/audit/DRIVE%20KINETIX%206000](http://localhost:3000/audit/DRIVE%20KINETIX%206000)
- [http://localhost:3000/audit/E19%20KINETIX%206000](http://localhost:3000/audit/E19%20KINETIX%206000)
- [http://localhost:3000/audit/KINETIX%206000%20DRIVE](http://localhost:3000/audit/KINETIX%206000%20DRIVE)
- [http://localhost:3000/audit/KINETIX%206000%20E05](http://localhost:3000/audit/KINETIX%206000%20E05)
- [http://localhost:3000/audit/KINETIX%206000%20E07](http://localhost:3000/audit/KINETIX%206000%20E07)
- [http://localhost:3000/audit/KINETIX%206000%20E16](http://localhost:3000/audit/KINETIX%206000%20E16)
- [http://localhost:3000/audit/KINETIX%206000%20E19](http://localhost:3000/audit/KINETIX%206000%20E19)
- [http://localhost:3000/audit/KINETIX%206000%20E64](http://localhost:3000/audit/KINETIX%206000%20E64)
- [http://localhost:3000/audit/KINETIX%206000%20SERVO%20DRIVE](http://localhost:3000/audit/KINETIX%206000%20SERVO%20DRIVE)
- [http://localhost:3000/audit/POWER%20FLEX%20700H](http://localhost:3000/audit/POWER%20FLEX%20700H)
- [http://localhost:3000/audit/POWERFLEX%20700%20AC%20DRIVE](http://localhost:3000/audit/POWERFLEX%20700%20AC%20DRIVE)
- [http://localhost:3000/audit/POWERFLEX%20700%20DRIVE](http://localhost:3000/audit/POWERFLEX%20700%20DRIVE)
- [http://localhost:3000/audit/POWERFLEX%20700%20HEATSINK%20FAN](http://localhost:3000/audit/POWERFLEX%20700%20HEATSINK%20FAN)
- [http://localhost:3000/audit/POWERFLEX%20700%20HIM](http://localhost:3000/audit/POWERFLEX%20700%20HIM)
- [http://localhost:3000/audit/POWERFLEX%20700%20PRICE](http://localhost:3000/audit/POWERFLEX%20700%20PRICE)
- [http://localhost:3000/audit/POWERFLEX%20700VC](http://localhost:3000/audit/POWERFLEX%20700VC)
- [http://localhost:3000/audit/ROCKWELL%20KINETIX%206000](http://localhost:3000/audit/ROCKWELL%20KINETIX%206000)
- [http://localhost:3000/audit/ROCKWELL%20POWERFLEX%20700](http://localhost:3000/audit/ROCKWELL%20POWERFLEX%20700)
- [http://localhost:3000/audit/SK%20G9%20PB1%20D096](http://localhost:3000/audit/SK%20G9%20PB1%20D096)
- [http://localhost:3000/audit/1771ASB](http://localhost:3000/audit/1771ASB)
- [http://localhost:3000/audit/51309148%20175](http://localhost:3000/audit/51309148%20175)
- [http://localhost:3000/audit/MC%20TAI0X02](http://localhost:3000/audit/MC%20TAI0X02)
- [http://localhost:3000/audit/HCS60](http://localhost:3000/audit/HCS60)
- [http://localhost:3000/audit/C300%20EXPERION](http://localhost:3000/audit/C300%20EXPERION)
- [http://localhost:3000/audit/6064%20BB%20SP1](http://localhost:3000/audit/6064%20BB%20SP1)
- [http://localhost:3000/audit/VPL%20B0631T%20CJ](http://localhost:3000/audit/VPL%20B0631T%20CJ)
- [http://localhost:3000/audit/MPL%20B310P%20MJ](http://localhost:3000/audit/MPL%20B310P%20MJ)
- [http://localhost:3000/audit/1771%20IFE](http://localhost:3000/audit/1771%20IFE)
- [http://localhost:3000/audit/1746%20NI8](http://localhost:3000/audit/1746%20NI8)
- [http://localhost:3000/audit/1746%20NI4](http://localhost:3000/audit/1746%20NI4)
- [http://localhost:3000/audit/1746%20OW16](http://localhost:3000/audit/1746%20OW16)
- [http://localhost:3000/audit/1746%20NO4I](http://localhost:3000/audit/1746%20NO4I)
- [http://localhost:3000/audit/1756%20HSC](http://localhost:3000/audit/1756%20HSC)
- [http://localhost:3000/audit/1756%20EN2T](http://localhost:3000/audit/1756%20EN2T)
- [http://localhost:3000/audit/1756%20OW16I](http://localhost:3000/audit/1756%20OW16I)
- [http://localhost:3000/audit/1756%20IF16](http://localhost:3000/audit/1756%20IF16)
- [http://localhost:3000/audit/1756%20L61](http://localhost:3000/audit/1756%20L61)
- [http://localhost:3000/audit/1756%20BA2](http://localhost:3000/audit/1756%20BA2)
- [http://localhost:3000/audit/UDC2500](http://localhost:3000/audit/UDC2500)
- [http://localhost:3000/audit/2198%20H008%20ERS](http://localhost:3000/audit/2198%20H008%20ERS)
- [http://localhost:3000/audit/KINETIX%206000](http://localhost:3000/audit/KINETIX%206000)
- [http://localhost:3000/audit/POWERFLEX%20700](http://localhost:3000/audit/POWERFLEX%20700)
- [http://localhost:3000/audit/2094%20BC02%20M02%20S](http://localhost:3000/audit/2094%20BC02%20M02%20S)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%20POWERFLEX%20700](http://localhost:3000/audit/ALLEN%20BRADLEY%20POWERFLEX%20700)
- [http://localhost:3000/audit/POWER%20FLEX%20700](http://localhost:3000/audit/POWER%20FLEX%20700)
- [http://localhost:3000/audit/POWERFLEX%20700S](http://localhost:3000/audit/POWERFLEX%20700S)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%20POWERFLEX%20700S](http://localhost:3000/audit/ALLEN%20BRADLEY%20POWERFLEX%20700S)
- [http://localhost:3000/audit/POWER%20FLEX%20700S](http://localhost:3000/audit/POWER%20FLEX%20700S)
- [http://localhost:3000/audit/1771%20P4S](http://localhost:3000/audit/1771%20P4S)
- [http://localhost:3000/audit/1771%20DL](http://localhost:3000/audit/1771%20DL)
- [http://localhost:3000/audit/1771%20OW16](http://localhost:3000/audit/1771%20OW16)
- [http://localhost:3000/audit/1771%20IGD](http://localhost:3000/audit/1771%20IGD)
- [http://localhost:3000/audit/1771%20IAD](http://localhost:3000/audit/1771%20IAD)
- [http://localhost:3000/audit/1771%20ASB](http://localhost:3000/audit/1771%20ASB)
- [http://localhost:3000/audit/1771%20A4B](http://localhost:3000/audit/1771%20A4B)
- [http://localhost:3000/audit/1771%20OFE](http://localhost:3000/audit/1771%20OFE)
- [http://localhost:3000/audit/1771%20IFE%20C](http://localhost:3000/audit/1771%20IFE%20C)
- [http://localhost:3000/audit/1771%20IFE%20A](http://localhost:3000/audit/1771%20IFE%20A)
- [http://localhost:3000/audit/1771%20IAD%20D](http://localhost:3000/audit/1771%20IAD%20D)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%201771%20IFE](http://localhost:3000/audit/ALLEN%20BRADLEY%201771%20IFE)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%201771%20P4S](http://localhost:3000/audit/ALLEN%20BRADLEY%201771%20P4S)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%201771%20ASB](http://localhost:3000/audit/ALLEN%20BRADLEY%201771%20ASB)
- [http://localhost:3000/audit/AB%201771%20IFE](http://localhost:3000/audit/AB%201771%20IFE)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%201771%20IFE%20C](http://localhost:3000/audit/ALLEN%20BRADLEY%201771%20IFE%20C)
- [http://localhost:3000/audit/1771IAD](http://localhost:3000/audit/1771IAD)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%201771%20IAD](http://localhost:3000/audit/ALLEN%20BRADLEY%201771%20IAD)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%201771%20A4B](http://localhost:3000/audit/ALLEN%20BRADLEY%201771%20A4B)
- [http://localhost:3000/audit/1771%20IAD%20C](http://localhost:3000/audit/1771%20IAD%20C)
- [http://localhost:3000/audit/1771%20ANALOG%20INPUT%20MODULE](http://localhost:3000/audit/1771%20ANALOG%20INPUT%20MODULE)
- [http://localhost:3000/audit/1771%20P4S%20POWER%20SUPPLY](http://localhost:3000/audit/1771%20P4S%20POWER%20SUPPLY)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%201771%20IA](http://localhost:3000/audit/ALLEN%20BRADLEY%201771%20IA)
- [http://localhost:3000/audit/1771%20ASB%20E](http://localhost:3000/audit/1771%20ASB%20E)
- [http://localhost:3000/audit/1771%20ASB%20MODULE](http://localhost:3000/audit/1771%20ASB%20MODULE)
- [http://localhost:3000/audit/1771%20ASB%20SERIES%20B](http://localhost:3000/audit/1771%20ASB%20SERIES%20B)
- [http://localhost:3000/audit/1771%20ASB%20TO%20CONTROLLOGIX](http://localhost:3000/audit/1771%20ASB%20TO%20CONTROLLOGIX)
- [http://localhost:3000/audit/1771%20IAD%20B](http://localhost:3000/audit/1771%20IAD%20B)
- [http://localhost:3000/audit/1771%20IFE%20ANALOG%20INPUT%20MODULE](http://localhost:3000/audit/1771%20IFE%20ANALOG%20INPUT%20MODULE)
- [http://localhost:3000/audit/1771%20OW16%20B](http://localhost:3000/audit/1771%20OW16%20B)
- [http://localhost:3000/audit/AB%201771%20IAD](http://localhost:3000/audit/AB%201771%20IAD)
- [http://localhost:3000/audit/1746%20IA8](http://localhost:3000/audit/1746%20IA8)
- [http://localhost:3000/audit/1746%20IB8](http://localhost:3000/audit/1746%20IB8)
- [http://localhost:3000/audit/1746%20IN16](http://localhost:3000/audit/1746%20IN16)
- [http://localhost:3000/audit/1746%20IO12DC](http://localhost:3000/audit/1746%20IO12DC)
- [http://localhost:3000/audit/1746%20OB8](http://localhost:3000/audit/1746%20OB8)
- [http://localhost:3000/audit/1746%20C7](http://localhost:3000/audit/1746%20C7)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%201746%20OW16](http://localhost:3000/audit/ALLEN%20BRADLEY%201746%20OW16)
- [http://localhost:3000/audit/1746%200W16](http://localhost:3000/audit/1746%200W16)
- [http://localhost:3000/audit/SLC%20500%20OUTPUT%20MODULE%201746%20OW16](http://localhost:3000/audit/SLC%20500%20OUTPUT%20MODULE%201746%20OW16)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%201746%20NI8](http://localhost:3000/audit/ALLEN%20BRADLEY%201746%20NI8)
- [http://localhost:3000/audit/1746%20N04I](http://localhost:3000/audit/1746%20N04I)
- [http://localhost:3000/audit/1746%20OW16%20OUTPUT%20MODULE](http://localhost:3000/audit/1746%20OW16%20OUTPUT%20MODULE)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%201746%20NO4I](http://localhost:3000/audit/ALLEN%20BRADLEY%201746%20NO4I)
- [http://localhost:3000/audit/1746%20N18](http://localhost:3000/audit/1746%20N18)
- [http://localhost:3000/audit/AB%201746%20OW16](http://localhost:3000/audit/AB%201746%20OW16)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%201746%20NI4](http://localhost:3000/audit/ALLEN%20BRADLEY%201746%20NI4)
- [http://localhost:3000/audit/1746%20N14](http://localhost:3000/audit/1746%20N14)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%20SLC%20500%20OUTPUT%20MODULE%201746%20OW16](http://localhost:3000/audit/ALLEN%20BRADLEY%20SLC%20500%20OUTPUT%20MODULE%201746%20OW16)
- [http://localhost:3000/audit/1746NO4I](http://localhost:3000/audit/1746NO4I)
- [http://localhost:3000/audit/AB%201746%20NI8](http://localhost:3000/audit/AB%201746%20NI8)
- [http://localhost:3000/audit/AB%201746%20NO4I](http://localhost:3000/audit/AB%201746%20NO4I)
- [http://localhost:3000/audit/AB%201746%20NI4](http://localhost:3000/audit/AB%201746%20NI4)
- [http://localhost:3000/audit/1746%20NI4%20ANALOG%20INPUT%20MODULE](http://localhost:3000/audit/1746%20NI4%20ANALOG%20INPUT%20MODULE)
- [http://localhost:3000/audit/1746NI4](http://localhost:3000/audit/1746NI4)
- [http://localhost:3000/audit/1746%20OW16%20SERIES%20C](http://localhost:3000/audit/1746%20OW16%20SERIES%20C)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%201746%200W16](http://localhost:3000/audit/ALLEN%20BRADLEY%201746%200W16)
- [http://localhost:3000/audit/1747%20OW16](http://localhost:3000/audit/1747%20OW16)
- [http://localhost:3000/audit/1746%20NI8%20ANALOG%20INPUT%20MODULE](http://localhost:3000/audit/1746%20NI8%20ANALOG%20INPUT%20MODULE)
- [http://localhost:3000/audit/1746%20NI8%20DATASHEET](http://localhost:3000/audit/1746%20NI8%20DATASHEET)
- [http://localhost:3000/audit/1747%20NI4](http://localhost:3000/audit/1747%20NI4)
- [http://localhost:3000/audit/1747%20NI8](http://localhost:3000/audit/1747%20NI8)
- [http://localhost:3000/audit/1747%20NO4I](http://localhost:3000/audit/1747%20NO4I)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%201746%20IB8](http://localhost:3000/audit/ALLEN%20BRADLEY%201746%20IB8)
- [http://localhost:3000/audit/1756%20HYD02](http://localhost:3000/audit/1756%20HYD02)
- [http://localhost:3000/audit/1756%20M02AS](http://localhost:3000/audit/1756%20M02AS)
- [http://localhost:3000/audit/1756%20M02AE](http://localhost:3000/audit/1756%20M02AE)
- [http://localhost:3000/audit/1756%20RM](http://localhost:3000/audit/1756%20RM)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%201756%20IF16](http://localhost:3000/audit/ALLEN%20BRADLEY%201756%20IF16)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%201756%20EN2T](http://localhost:3000/audit/ALLEN%20BRADLEY%201756%20EN2T)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%201756%20BA2](http://localhost:3000/audit/ALLEN%20BRADLEY%201756%20BA2)
- [http://localhost:3000/audit/AB%201756%20IF16](http://localhost:3000/audit/AB%201756%20IF16)
- [http://localhost:3000/audit/AB%201756%20EN2T](http://localhost:3000/audit/AB%201756%20EN2T)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%201756%20OW16I](http://localhost:3000/audit/ALLEN%20BRADLEY%201756%20OW16I)
- [http://localhost:3000/audit/ALLEN%20BRADLEY%201756%20L61](http://localhost:3000/audit/ALLEN%20BRADLEY%201756%20L61)
- [http://localhost:3000/audit/ROCKWELL%201756%20EN2T](http://localhost:3000/audit/ROCKWELL%201756%20EN2T)
- [http://localhost:3000/audit/1756%20IF16%20A](http://localhost:3000/audit/1756%20IF16%20A)
- [http://localhost:3000/audit/1756%20ENT2](http://localhost:3000/audit/1756%20ENT2)
- [http://localhost:3000/audit/1756%20OW16I%20A](http://localhost:3000/audit/1756%20OW16I%20A)
- [http://localhost:3000/audit/2198-H008-ERS](http://localhost:3000/audit/2198-H008-ERS)
- [http://localhost:3000/audit/1746-NI8](http://localhost:3000/audit/1746-NI8)
- [http://localhost:3000/audit/1756-EN2T](http://localhost:3000/audit/1756-EN2T)
- [http://localhost:3000/audit/1756-IF16](http://localhost:3000/audit/1756-IF16)
- [http://localhost:3000/audit/1747-NI8](http://localhost:3000/audit/1747-NI8)
- [http://localhost:3000/audit/1746-OW16](http://localhost:3000/audit/1746-OW16)
- [http://localhost:3000/audit/1756-L71](http://localhost:3000/audit/1756-L71)
- [http://localhost:3000/audit/2711P-T10C4D1](http://localhost:3000/audit/2711P-T10C4D1)

</details>

---

### Core SEO

*0 error(s), 96 warning(s)*

#### Meta Title **[ERROR]**

`core/meta-title`

> Validates page title presence and length

**Solution:**

Every page needs a unique, descriptive title tag between 30-60 characters. Titles appear in browser tabs, search results, and social shares. Write titles that accurately describe the page content while including your primary keyword near the beginning. If your title is too short, add more descriptive context. If too long, prioritize the most important information first and trim secondary details. Avoid keyword stuffing or duplicate titles across pages.

| Check | Status | Message |
|-------|--------|---------|
| meta-title | ! warn | Title too long |

<details><summary><strong>meta-title:</strong> 95 page(s) affected</summary>

- [/about](http://localhost:3000/about)
- [/contact](http://localhost:3000/contact)
- [/category/control](http://localhost:3000/category/control)
- [/category/motion](http://localhost:3000/category/motion)
- [/category/interface](http://localhost:3000/category/interface)
- [/audit/1336](http://localhost:3000/audit/1336)
- [/audit/1394](http://localhost:3000/audit/1394)
- [/audit/1746](http://localhost:3000/audit/1746)
- [/audit/1747](http://localhost:3000/audit/1747)
- [/audit/1756](http://localhost:3000/audit/1756)
- [/audit/1794](http://localhost:3000/audit/1794)
- [/audit/2094](http://localhost:3000/audit/2094)
- [/audit/2198](http://localhost:3000/audit/2198)
- [/audit/3200](http://localhost:3000/audit/3200)
- [/audit/6000](http://localhost:3000/audit/6000)
- [/audit/6064](http://localhost:3000/audit/6064)
- [/audit/51309148](http://localhost:3000/audit/51309148)
- [/audit/1756-IA8D](http://localhost:3000/audit/1756-IA8D)
- [/audit/1756-IA16](http://localhost:3000/audit/1756-IA16)
- [/audit/1756-IA16I](http://localhost:3000/audit/1756-IA16I)
- [/audit/1756-IM16I](http://localhost:3000/audit/1756-IM16I)
- [/audit/1756-IA32](http://localhost:3000/audit/1756-IA32)
- [/audit/1756-IN16](http://localhost:3000/audit/1756-IN16)
- [/audit/1756-OA8](http://localhost:3000/audit/1756-OA8)
- [/audit/1756-OA8D](http://localhost:3000/audit/1756-OA8D)
- [/audit/1756-OA8E](http://localhost:3000/audit/1756-OA8E)
- [/audit/1756-OA16](http://localhost:3000/audit/1756-OA16)
- [/audit/1756-OA16I](http://localhost:3000/audit/1756-OA16I)
- [/audit/1756-ON8](http://localhost:3000/audit/1756-ON8)
- [/audit/1756-IB16](http://localhost:3000/audit/1756-IB16)
- [/audit/1756-IB16D](http://localhost:3000/audit/1756-IB16D)
- [/audit/1756-IB16I](http://localhost:3000/audit/1756-IB16I)
- [/audit/1756-IB16IF](http://localhost:3000/audit/1756-IB16IF)
- [/audit/1756-IB16ISOE](http://localhost:3000/audit/1756-IB16ISOE)
- [/audit/1756-IB32](http://localhost:3000/audit/1756-IB32)
- [/audit/1756-IC16](http://localhost:3000/audit/1756-IC16)
- [/audit/1756-IG16](http://localhost:3000/audit/1756-IG16)
- [/audit/1756-IH16I](http://localhost:3000/audit/1756-IH16I)
- [/audit/1756-IV16](http://localhost:3000/audit/1756-IV16)
- [/audit/1756-IV32](http://localhost:3000/audit/1756-IV32)
- [/audit/1756-OB8](http://localhost:3000/audit/1756-OB8)
- [/audit/1756-OB8EI](http://localhost:3000/audit/1756-OB8EI)
- [/audit/1756-OB8I](http://localhost:3000/audit/1756-OB8I)
- [/audit/1756-OB16D](http://localhost:3000/audit/1756-OB16D)
- [/audit/1756-OB16E](http://localhost:3000/audit/1756-OB16E)
- [/audit/1756-OB16IEF](http://localhost:3000/audit/1756-OB16IEF)
- [/audit/1756-OB16I](http://localhost:3000/audit/1756-OB16I)
- [/audit/1756-OB32](http://localhost:3000/audit/1756-OB32)
- [/audit/1756-OC8](http://localhost:3000/audit/1756-OC8)
- [/audit/1756-OG16](http://localhost:3000/audit/1756-OG16)
- [/audit/1756-OH8I](http://localhost:3000/audit/1756-OH8I)
- [/audit/1756-OV16E](http://localhost:3000/audit/1756-OV16E)
- [/audit/1756-IF8](http://localhost:3000/audit/1756-IF8)
- [/audit/1756-IF8I](http://localhost:3000/audit/1756-IF8I)
- [/audit/1756-IF16I](http://localhost:3000/audit/1756-IF16I)
- [/audit/1756-IR6I](http://localhost:3000/audit/1756-IR6I)
- [/audit/1756-IRT8I](http://localhost:3000/audit/1756-IRT8I)
- [/audit/1756-IR12](http://localhost:3000/audit/1756-IR12)
- [/audit/1756-IT6I](http://localhost:3000/audit/1756-IT6I)
- [/audit/1756-IT16](http://localhost:3000/audit/1756-IT16)
- [/audit/1756-OF4](http://localhost:3000/audit/1756-OF4)
- [/audit/1756-OF8](http://localhost:3000/audit/1756-OF8)
- [/audit/1756-OF8I](http://localhost:3000/audit/1756-OF8I)
- [/audit/1756-EWEB](http://localhost:3000/audit/1756-EWEB)
- [/audit/1756-DHRIO](http://localhost:3000/audit/1756-DHRIO)
- [/audit/1756-ENBT](http://localhost:3000/audit/1756-ENBT)
- [/audit/1756-CNB](http://localhost:3000/audit/1756-CNB)
- [/audit/1756-CNBR](http://localhost:3000/audit/1756-CNBR)
- [/audit/1756-DNB](http://localhost:3000/audit/1756-DNB)
- [/audit/1756-L61](http://localhost:3000/audit/1756-L61)
- [/audit/1756-L62](http://localhost:3000/audit/1756-L62)
- [/audit/1756-L63](http://localhost:3000/audit/1756-L63)
- [/audit/1756-L55](http://localhost:3000/audit/1756-L55)
- [/audit/1747-L531](http://localhost:3000/audit/1747-L531)
- [/audit/1746-IA8](http://localhost:3000/audit/1746-IA8)
- [/audit/1746-IN16](http://localhost:3000/audit/1746-IN16)
- [/audit/1746-IB8](http://localhost:3000/audit/1746-IB8)
- [/audit/1746-IO12DC](http://localhost:3000/audit/1746-IO12DC)
- [/audit/1746-OB8](http://localhost:3000/audit/1746-OB8)
- [/audit/1746-HSCE2](http://localhost:3000/audit/1746-HSCE2)
- [/audit/1746-BTM](http://localhost:3000/audit/1746-BTM)
- [/audit/1746-HSCE](http://localhost:3000/audit/1746-HSCE)
- [/audit/1746-HSTP1](http://localhost:3000/audit/1746-HSTP1)
- [/audit/1746-QS](http://localhost:3000/audit/1746-QS)
- [/audit/1746-QV](http://localhost:3000/audit/1746-QV)
- [/audit/1747-SCNR](http://localhost:3000/audit/1747-SCNR)
- [/audit/1747-SDN](http://localhost:3000/audit/1747-SDN)
- [/audit/1747-SN](http://localhost:3000/audit/1747-SN)
- [/audit/1746-NIO4V](http://localhost:3000/audit/1746-NIO4V)
- [/audit/1746-NIO4I](http://localhost:3000/audit/1746-NIO4I)
- [/audit/1746-NO4I](http://localhost:3000/audit/1746-NO4I)
- [/audit/1746-NO4V](http://localhost:3000/audit/1746-NO4V)
- [/audit/6ES7212-1AB23-0XB0](http://localhost:3000/audit/6ES7212-1AB23-0XB0)
- [/audit/6ES7212-1BB23-0XB0](http://localhost:3000/audit/6ES7212-1BB23-0XB0)
- [/audit/6ES7214-1AD23-0XB0](http://localhost:3000/audit/6ES7214-1AD23-0XB0)

</details>

<details><summary><strong>meta-title:</strong> 95 item(s)</summary>

- [Institutional Mission | Industrial Ghost Parts Age (78 chars)](http://localhost:3000/about)
- [Secure Dispatch | Contact the Audit Agency | Indus (67 chars)](http://localhost:3000/contact)
- [Control Systems Registry | Industrial Ghost Parts  (80 chars)](http://localhost:3000/category/control)
- [Motion & Drives Registry | Industrial Ghost Parts  (80 chars)](http://localhost:3000/category/motion)
- [Interface / HMI Registry | Industrial Ghost Parts  (80 chars)](http://localhost:3000/category/interface)
- [Audit: 1336 | Industrial 1336 BDB SP15D | Industri (64 chars)](http://localhost:3000/audit/1336)
- [Audit: 1394 | Industrial 1394 SJT10 C | Industrial (62 chars)](http://localhost:3000/audit/1394)
- [Audit: 1746 | Allen-Bradley 1746 NI8 | Industrial  (61 chars)](http://localhost:3000/audit/1746)
- [Audit: 1747 | Allen-Bradley 1747 OW16 | Industrial (62 chars)](http://localhost:3000/audit/1747)
- [Audit: 1756 | Allen-Bradley 1756 HSC | Industrial  (61 chars)](http://localhost:3000/audit/1756)
- [Audit: 1794 | Allen-Bradley 1794 IF16 | Industrial (62 chars)](http://localhost:3000/audit/1794)
- [Audit: 2094 | Industrial 2094 BC02 M02 S | Industr (65 chars)](http://localhost:3000/audit/2094)
- [Audit: 2198 | Industrial 2198 H008 ERS | Industria (63 chars)](http://localhost:3000/audit/2198)
- [Audit: 3200 | Industrial HONEYWELL 3200 CONTROLLER (75 chars)](http://localhost:3000/audit/3200)
- [Audit: 6000 | Industrial KINETIX 6000 | Industrial (62 chars)](http://localhost:3000/audit/6000)
- [Audit: 6064 | Industrial 6064 BB SP1 | Industrial  (61 chars)](http://localhost:3000/audit/6064)
- [Audit: 51309148 | Industrial 51309148 175 | Indust (66 chars)](http://localhost:3000/audit/51309148)
- [Audit: 1756-IA8D | Allen-Bradley ALLEN-BRADLEY 175 (94 chars)](http://localhost:3000/audit/1756-IA8D)
- [Audit: 1756-IA16 | Allen-Bradley ALLEN-BRADLEY 175 (94 chars)](http://localhost:3000/audit/1756-IA16)
- [Audit: 1756-IA16I | Allen-Bradley ALLEN-BRADLEY 17 (96 chars)](http://localhost:3000/audit/1756-IA16I)
- [Audit: 1756-IM16I | Allen-Bradley ALLEN-BRADLEY 17 (96 chars)](http://localhost:3000/audit/1756-IM16I)
- [Audit: 1756-IA32 | Allen-Bradley ALLEN-BRADLEY 175 (94 chars)](http://localhost:3000/audit/1756-IA32)
- [Audit: 1756-IN16 | Allen-Bradley ALLEN-BRADLEY 175 (94 chars)](http://localhost:3000/audit/1756-IN16)
- [Audit: 1756-OA8 | Allen-Bradley ALLEN-BRADLEY 1756 (92 chars)](http://localhost:3000/audit/1756-OA8)
- [Audit: 1756-OA8D | Allen-Bradley ALLEN-BRADLEY 175 (94 chars)](http://localhost:3000/audit/1756-OA8D)
- [Audit: 1756-OA8E | Allen-Bradley ALLEN-BRADLEY 175 (94 chars)](http://localhost:3000/audit/1756-OA8E)
- [Audit: 1756-OA16 | Allen-Bradley ALLEN-BRADLEY 175 (94 chars)](http://localhost:3000/audit/1756-OA16)
- [Audit: 1756-OA16I | Allen-Bradley ALLEN-BRADLEY 17 (96 chars)](http://localhost:3000/audit/1756-OA16I)
- [Audit: 1756-ON8 | Allen-Bradley ALLEN-BRADLEY 1756 (92 chars)](http://localhost:3000/audit/1756-ON8)
- [Audit: 1756-IB16 | Allen-Bradley ALLEN-BRADLEY 175 (94 chars)](http://localhost:3000/audit/1756-IB16)
- [Audit: 1756-IB16D | Allen-Bradley ALLEN-BRADLEY 17 (96 chars)](http://localhost:3000/audit/1756-IB16D)
- [Audit: 1756-IB16I | Allen-Bradley ALLEN-BRADLEY 17 (96 chars)](http://localhost:3000/audit/1756-IB16I)
- [Audit: 1756-IB16IF | Allen-Bradley ALLEN-BRADLEY 1 (98 chars)](http://localhost:3000/audit/1756-IB16IF)
- [Audit: 1756-IB16ISOE | Allen-Bradley ALLEN-BRADLEY (102 chars)](http://localhost:3000/audit/1756-IB16ISOE)
- [Audit: 1756-IB32 | Allen-Bradley ALLEN-BRADLEY 175 (94 chars)](http://localhost:3000/audit/1756-IB32)
- [Audit: 1756-IC16 | Allen-Bradley ALLEN-BRADLEY 175 (94 chars)](http://localhost:3000/audit/1756-IC16)
- [Audit: 1756-IG16 | Allen-Bradley ALLEN-BRADLEY 175 (94 chars)](http://localhost:3000/audit/1756-IG16)
- [Audit: 1756-IH16I | Allen-Bradley ALLEN-BRADLEY 17 (96 chars)](http://localhost:3000/audit/1756-IH16I)
- [Audit: 1756-IV16 | Allen-Bradley ALLEN-BRADLEY 175 (94 chars)](http://localhost:3000/audit/1756-IV16)
- [Audit: 1756-IV32 | Allen-Bradley ALLEN-BRADLEY 175 (94 chars)](http://localhost:3000/audit/1756-IV32)
- [Audit: 1756-OB8 | Allen-Bradley ALLEN-BRADLEY 1756 (92 chars)](http://localhost:3000/audit/1756-OB8)
- [Audit: 1756-OB8EI | Allen-Bradley ALLEN-BRADLEY 17 (96 chars)](http://localhost:3000/audit/1756-OB8EI)
- [Audit: 1756-OB8I | Allen-Bradley ALLEN-BRADLEY 175 (94 chars)](http://localhost:3000/audit/1756-OB8I)
- [Audit: 1756-OB16D | Allen-Bradley ALLEN-BRADLEY 17 (96 chars)](http://localhost:3000/audit/1756-OB16D)
- [Audit: 1756-OB16E | Allen-Bradley ALLEN-BRADLEY 17 (96 chars)](http://localhost:3000/audit/1756-OB16E)
- [Audit: 1756-OB16IEF | Allen-Bradley ALLEN-BRADLEY  (100 chars)](http://localhost:3000/audit/1756-OB16IEF)
- [Audit: 1756-OB16I | Allen-Bradley ALLEN-BRADLEY 17 (96 chars)](http://localhost:3000/audit/1756-OB16I)
- [Audit: 1756-OB32 | Allen-Bradley ALLEN-BRADLEY 175 (94 chars)](http://localhost:3000/audit/1756-OB32)
- [Audit: 1756-OC8 | Allen-Bradley ALLEN-BRADLEY 1756 (92 chars)](http://localhost:3000/audit/1756-OC8)
- [Audit: 1756-OG16 | Allen-Bradley ALLEN-BRADLEY 175 (94 chars)](http://localhost:3000/audit/1756-OG16)
- [Audit: 1756-OH8I | Allen-Bradley ALLEN-BRADLEY 175 (94 chars)](http://localhost:3000/audit/1756-OH8I)
- [Audit: 1756-OV16E | Allen-Bradley ALLEN-BRADLEY 17 (96 chars)](http://localhost:3000/audit/1756-OV16E)
- [Audit: 1756-IF8 | Allen-Bradley ALLEN-BRADLEY 1756 (92 chars)](http://localhost:3000/audit/1756-IF8)
- [Audit: 1756-IF8I | Allen-Bradley ALLEN-BRADLEY 175 (94 chars)](http://localhost:3000/audit/1756-IF8I)
- [Audit: 1756-IF16I | Allen-Bradley ALLEN-BRADLEY 17 (96 chars)](http://localhost:3000/audit/1756-IF16I)
- [Audit: 1756-IR6I | Allen-Bradley ALLEN-BRADLEY 175 (94 chars)](http://localhost:3000/audit/1756-IR6I)
- [Audit: 1756-IRT8I | Allen-Bradley ALLEN-BRADLEY 17 (96 chars)](http://localhost:3000/audit/1756-IRT8I)
- [Audit: 1756-IR12 | Allen-Bradley ALLEN-BRADLEY 175 (94 chars)](http://localhost:3000/audit/1756-IR12)
- [Audit: 1756-IT6I | Allen-Bradley ALLEN-BRADLEY 175 (94 chars)](http://localhost:3000/audit/1756-IT6I)
- [Audit: 1756-IT16 | Allen-Bradley ALLEN-BRADLEY 175 (94 chars)](http://localhost:3000/audit/1756-IT16)
- [Audit: 1756-OF4 | Allen-Bradley ALLEN-BRADLEY 1756 (92 chars)](http://localhost:3000/audit/1756-OF4)
- [Audit: 1756-OF8 | Allen-Bradley ALLEN-BRADLEY 1756 (92 chars)](http://localhost:3000/audit/1756-OF8)
- [Audit: 1756-OF8I | Allen-Bradley ALLEN-BRADLEY 175 (94 chars)](http://localhost:3000/audit/1756-OF8I)
- [Audit: 1756-EWEB | Allen-Bradley ALLEN-BRADLEY 175 (94 chars)](http://localhost:3000/audit/1756-EWEB)
- [Audit: 1756-DHRIO | Allen-Bradley ALLEN-BRADLEY 17 (96 chars)](http://localhost:3000/audit/1756-DHRIO)
- [Audit: 1756-ENBT | Allen-Bradley ALLEN-BRADLEY 175 (94 chars)](http://localhost:3000/audit/1756-ENBT)
- [Audit: 1756-CNB | Allen-Bradley ALLEN-BRADLEY 1756 (92 chars)](http://localhost:3000/audit/1756-CNB)
- [Audit: 1756-CNBR | Allen-Bradley ALLEN-BRADLEY 175 (94 chars)](http://localhost:3000/audit/1756-CNBR)
- [Audit: 1756-DNB | Allen-Bradley ALLEN-BRADLEY 1756 (92 chars)](http://localhost:3000/audit/1756-DNB)
- [Audit: 1756-L61 | Allen-Bradley ALLEN-BRADLEY 1756 (92 chars)](http://localhost:3000/audit/1756-L61)
- [Audit: 1756-L62 | Allen-Bradley ALLEN-BRADLEY 1756 (92 chars)](http://localhost:3000/audit/1756-L62)
- [Audit: 1756-L63 | Allen-Bradley ALLEN-BRADLEY 1756 (92 chars)](http://localhost:3000/audit/1756-L63)
- [Audit: 1756-L55 | Allen-Bradley ALLEN-BRADLEY 1756 (92 chars)](http://localhost:3000/audit/1756-L55)
- [Audit: 1747-L531 | Allen-Bradley ALLEN-BRADLEY 174 (89 chars)](http://localhost:3000/audit/1747-L531)
- [Audit: 1746-IA8 | Allen-Bradley ALLEN-BRADLEY 1746 (87 chars)](http://localhost:3000/audit/1746-IA8)
- [Audit: 1746-IN16 | Allen-Bradley ALLEN-BRADLEY 174 (89 chars)](http://localhost:3000/audit/1746-IN16)
- [Audit: 1746-IB8 | Allen-Bradley ALLEN-BRADLEY 1746 (87 chars)](http://localhost:3000/audit/1746-IB8)
- [Audit: 1746-IO12DC | Allen-Bradley ALLEN-BRADLEY 1 (93 chars)](http://localhost:3000/audit/1746-IO12DC)
- [Audit: 1746-OB8 | Allen-Bradley ALLEN-BRADLEY 1746 (87 chars)](http://localhost:3000/audit/1746-OB8)
- [Audit: 1746-HSCE2 | Allen-Bradley ALLEN-BRADLEY 17 (91 chars)](http://localhost:3000/audit/1746-HSCE2)
- [Audit: 1746-BTM | Allen-Bradley ALLEN-BRADLEY 1746 (87 chars)](http://localhost:3000/audit/1746-BTM)
- [Audit: 1746-HSCE | Allen-Bradley ALLEN-BRADLEY 174 (89 chars)](http://localhost:3000/audit/1746-HSCE)
- [Audit: 1746-HSTP1 | Allen-Bradley ALLEN-BRADLEY 17 (91 chars)](http://localhost:3000/audit/1746-HSTP1)
- [Audit: 1746-QS | Allen-Bradley ALLEN-BRADLEY 1746- (85 chars)](http://localhost:3000/audit/1746-QS)
- [Audit: 1746-QV | Allen-Bradley ALLEN-BRADLEY 1746- (85 chars)](http://localhost:3000/audit/1746-QV)
- [Audit: 1747-SCNR | Allen-Bradley ALLEN-BRADLEY 174 (89 chars)](http://localhost:3000/audit/1747-SCNR)
- [Audit: 1747-SDN | Allen-Bradley ALLEN-BRADLEY 1747 (87 chars)](http://localhost:3000/audit/1747-SDN)
- [Audit: 1747-SN | Allen-Bradley ALLEN-BRADLEY 1747- (85 chars)](http://localhost:3000/audit/1747-SN)
- [Audit: 1746-NIO4V | Allen-Bradley ALLEN-BRADLEY 17 (91 chars)](http://localhost:3000/audit/1746-NIO4V)
- [Audit: 1746-NIO4I | Allen-Bradley ALLEN-BRADLEY 17 (91 chars)](http://localhost:3000/audit/1746-NIO4I)
- [Audit: 1746-NO4I | Allen-Bradley ALLEN-BRADLEY 174 (89 chars)](http://localhost:3000/audit/1746-NO4I)
- [Audit: 1746-NO4V | Allen-Bradley ALLEN-BRADLEY 174 (89 chars)](http://localhost:3000/audit/1746-NO4V)
- [Audit: 6ES7212-1AB23-0XB0 | Siemens SIEMENS 6ES721 (102 chars)](http://localhost:3000/audit/6ES7212-1AB23-0XB0)
- [Audit: 6ES7212-1BB23-0XB0 | Siemens SIEMENS 6ES721 (102 chars)](http://localhost:3000/audit/6ES7212-1BB23-0XB0)
- [Audit: 6ES7214-1AD23-0XB0 | Siemens SIEMENS 6ES721 (102 chars)](http://localhost:3000/audit/6ES7214-1AD23-0XB0)

</details>

---

#### Meta Description **[ERROR]**

`core/meta-description`

> Validates meta description presence and length

**Solution:**

Meta descriptions should be 120-160 characters and provide a compelling summary of the page. While not a direct ranking factor, good descriptions improve click-through rates from search results. Write unique descriptions for each page that accurately preview the content. Include a call-to-action when appropriate. If missing, search engines will auto-generate snippets which may not represent your page optimally.

| Check | Status | Message |
|-------|--------|---------|
| meta-description | ! warn | Description too short |

<details><summary><strong>meta-description:</strong> 1 page(s) affected</summary>

- [/contact](http://localhost:3000/contact)

</details>

<details><summary><strong>meta-description:</strong> 1 item(s)</summary>

- [Submit a facility audit request or contact the Ind (116 chars)](http://localhost:3000/contact)

</details>

---

### Security

*100 error(s), 3 warning(s)*

#### HTTPS **[ERROR]**

`security/https`

> Checks for HTTPS usage

**Solution:**

HTTPS encrypts data between users and your server, protecting sensitive information. It's a ranking signal and required for many modern browser features. Migrate to HTTPS by obtaining an SSL certificate (free from Let's Encrypt). Update internal links to use https://. Set up 301 redirects from HTTP to HTTPS. Update your canonical URLs and sitemap. Check for mixed content warnings after migration.

| Check | Status | Message |
|-------|--------|---------|
| https | X fail | Page not served over HTTPS |

<details><summary><strong>https:</strong> 100 page(s) affected</summary>

- [/](http://localhost:3000/)
- [/about](http://localhost:3000/about)
- [/contact](http://localhost:3000/contact)
- [/category/control](http://localhost:3000/category/control)
- [/category/motion](http://localhost:3000/category/motion)
- [/category/interface](http://localhost:3000/category/interface)
- [/audit/1336](http://localhost:3000/audit/1336)
- [/audit/1394](http://localhost:3000/audit/1394)
- [/audit/1746](http://localhost:3000/audit/1746)
- [/audit/1747](http://localhost:3000/audit/1747)
- [/audit/1756](http://localhost:3000/audit/1756)
- [/audit/1771](http://localhost:3000/audit/1771)
- [/audit/1794](http://localhost:3000/audit/1794)
- [/audit/2094](http://localhost:3000/audit/2094)
- [/audit/2198](http://localhost:3000/audit/2198)
- [/audit/2500](http://localhost:3000/audit/2500)
- [/audit/3200](http://localhost:3000/audit/3200)
- [/audit/5069](http://localhost:3000/audit/5069)
- [/audit/5561](http://localhost:3000/audit/5561)
- [/audit/6000](http://localhost:3000/audit/6000)
- [/audit/6064](http://localhost:3000/audit/6064)
- [/audit/51309148](http://localhost:3000/audit/51309148)
- [/audit/1756-IA8D](http://localhost:3000/audit/1756-IA8D)
- [/audit/1756-IA16](http://localhost:3000/audit/1756-IA16)
- [/audit/1756-IA16I](http://localhost:3000/audit/1756-IA16I)
- [/audit/1756-IM16I](http://localhost:3000/audit/1756-IM16I)
- [/audit/1756-IA32](http://localhost:3000/audit/1756-IA32)
- [/audit/1756-IN16](http://localhost:3000/audit/1756-IN16)
- [/audit/1756-OA8](http://localhost:3000/audit/1756-OA8)
- [/audit/1756-OA8D](http://localhost:3000/audit/1756-OA8D)
- [/audit/1756-OA8E](http://localhost:3000/audit/1756-OA8E)
- [/audit/1756-OA16](http://localhost:3000/audit/1756-OA16)
- [/audit/1756-OA16I](http://localhost:3000/audit/1756-OA16I)
- [/audit/1756-ON8](http://localhost:3000/audit/1756-ON8)
- [/audit/1756-IB16](http://localhost:3000/audit/1756-IB16)
- [/audit/1756-IB16D](http://localhost:3000/audit/1756-IB16D)
- [/audit/1756-IB16I](http://localhost:3000/audit/1756-IB16I)
- [/audit/1756-IB16IF](http://localhost:3000/audit/1756-IB16IF)
- [/audit/1756-IB16ISOE](http://localhost:3000/audit/1756-IB16ISOE)
- [/audit/1756-IB32](http://localhost:3000/audit/1756-IB32)
- [/audit/1756-IC16](http://localhost:3000/audit/1756-IC16)
- [/audit/1756-IG16](http://localhost:3000/audit/1756-IG16)
- [/audit/1756-IH16I](http://localhost:3000/audit/1756-IH16I)
- [/audit/1756-IV16](http://localhost:3000/audit/1756-IV16)
- [/audit/1756-IV32](http://localhost:3000/audit/1756-IV32)
- [/audit/1756-OB8](http://localhost:3000/audit/1756-OB8)
- [/audit/1756-OB8EI](http://localhost:3000/audit/1756-OB8EI)
- [/audit/1756-OB8I](http://localhost:3000/audit/1756-OB8I)
- [/audit/1756-OB16D](http://localhost:3000/audit/1756-OB16D)
- [/audit/1756-OB16E](http://localhost:3000/audit/1756-OB16E)
- [/audit/1756-OB16IEF](http://localhost:3000/audit/1756-OB16IEF)
- [/audit/1756-OB16I](http://localhost:3000/audit/1756-OB16I)
- [/audit/1756-OB32](http://localhost:3000/audit/1756-OB32)
- [/audit/1756-OC8](http://localhost:3000/audit/1756-OC8)
- [/audit/1756-OG16](http://localhost:3000/audit/1756-OG16)
- [/audit/1756-OH8I](http://localhost:3000/audit/1756-OH8I)
- [/audit/1756-OV16E](http://localhost:3000/audit/1756-OV16E)
- [/audit/1756-IF8](http://localhost:3000/audit/1756-IF8)
- [/audit/1756-IF8I](http://localhost:3000/audit/1756-IF8I)
- [/audit/1756-IF16I](http://localhost:3000/audit/1756-IF16I)
- [/audit/1756-IR6I](http://localhost:3000/audit/1756-IR6I)
- [/audit/1756-IRT8I](http://localhost:3000/audit/1756-IRT8I)
- [/audit/1756-IR12](http://localhost:3000/audit/1756-IR12)
- [/audit/1756-IT6I](http://localhost:3000/audit/1756-IT6I)
- [/audit/1756-IT16](http://localhost:3000/audit/1756-IT16)
- [/audit/1756-OF4](http://localhost:3000/audit/1756-OF4)
- [/audit/1756-OF8](http://localhost:3000/audit/1756-OF8)
- [/audit/1756-OF8I](http://localhost:3000/audit/1756-OF8I)
- [/audit/1756-EWEB](http://localhost:3000/audit/1756-EWEB)
- [/audit/1756-DHRIO](http://localhost:3000/audit/1756-DHRIO)
- [/audit/1756-ENBT](http://localhost:3000/audit/1756-ENBT)
- [/audit/1756-CNB](http://localhost:3000/audit/1756-CNB)
- [/audit/1756-CNBR](http://localhost:3000/audit/1756-CNBR)
- [/audit/1756-DNB](http://localhost:3000/audit/1756-DNB)
- [/audit/1756-L61](http://localhost:3000/audit/1756-L61)
- [/audit/1756-L62](http://localhost:3000/audit/1756-L62)
- [/audit/1756-L63](http://localhost:3000/audit/1756-L63)
- [/audit/1756-L55](http://localhost:3000/audit/1756-L55)
- [/audit/1747-L531](http://localhost:3000/audit/1747-L531)
- [/audit/1746-IA8](http://localhost:3000/audit/1746-IA8)
- [/audit/1746-IN16](http://localhost:3000/audit/1746-IN16)
- [/audit/1746-IB8](http://localhost:3000/audit/1746-IB8)
- [/audit/1746-IO12DC](http://localhost:3000/audit/1746-IO12DC)
- [/audit/1746-OB8](http://localhost:3000/audit/1746-OB8)
- [/audit/1746-HSCE2](http://localhost:3000/audit/1746-HSCE2)
- [/audit/1746-BTM](http://localhost:3000/audit/1746-BTM)
- [/audit/1746-HSCE](http://localhost:3000/audit/1746-HSCE)
- [/audit/1746-HSTP1](http://localhost:3000/audit/1746-HSTP1)
- [/audit/1746-QS](http://localhost:3000/audit/1746-QS)
- [/audit/1746-QV](http://localhost:3000/audit/1746-QV)
- [/audit/1747-SCNR](http://localhost:3000/audit/1747-SCNR)
- [/audit/1747-SDN](http://localhost:3000/audit/1747-SDN)
- [/audit/1747-SN](http://localhost:3000/audit/1747-SN)
- [/audit/1746-NIO4V](http://localhost:3000/audit/1746-NIO4V)
- [/audit/1746-NIO4I](http://localhost:3000/audit/1746-NIO4I)
- [/audit/1746-NO4I](http://localhost:3000/audit/1746-NO4I)
- [/audit/1746-NO4V](http://localhost:3000/audit/1746-NO4V)
- [/audit/6ES7212-1AB23-0XB0](http://localhost:3000/audit/6ES7212-1AB23-0XB0)
- [/audit/6ES7212-1BB23-0XB0](http://localhost:3000/audit/6ES7212-1BB23-0XB0)
- [/audit/6ES7214-1AD23-0XB0](http://localhost:3000/audit/6ES7214-1AD23-0XB0)

</details>

---

#### Content Security Policy **[WARN]**

`security/csp`

> Checks for Content-Security-Policy header and validates directives

**Solution:**

CSP prevents XSS attacks by restricting which resources can load. Start with a report-only policy to identify issues. Key directives: default-src 'self', script-src (avoid 'unsafe-inline'), img-src, style-src, frame-ancestors. Use nonces or hashes instead of 'unsafe-inline' for scripts. Test thoroughly as strict CSP can break functionality.

| Check | Status | Message |
|-------|--------|---------|
| csp-missing | ! warn | No Content-Security-Policy header |

---

#### X-Frame-Options **[WARN]**

`security/x-frame-options`

> Checks for clickjacking protection header

**Solution:**

X-Frame-Options prevents your site from being embedded in iframes, protecting against clickjacking attacks. Set: X-Frame-Options: DENY (no framing) or SAMEORIGIN (same origin only). For modern browsers, CSP frame-ancestors is preferred: Content-Security-Policy: frame-ancestors 'self'. Use both for maximum compatibility.

| Check | Status | Message |
|-------|--------|---------|
| x-frame-options | ! warn | No clickjacking protection |

---

#### Form CAPTCHA **[WARN]**

`security/form-captcha`

> Checks for CAPTCHA protection on public forms

**Solution:**

Add CAPTCHA protection (reCAPTCHA, Cloudflare Turnstile, hCaptcha, etc.) to public-facing forms to prevent spam and bot submissions. Contact forms, comment forms, newsletter signups, and registration forms are common targets for automated abuse. Modern CAPTCHA solutions like Turnstile offer invisible protection with minimal user friction.

| Check | Status | Message |
|-------|--------|---------|
| form-captcha | ! warn | 1 public form(s) without CAPTCHA |

<details><summary><strong>form-captcha:</strong> 1 page(s) affected</summary>

- [/contact](http://localhost:3000/contact)

</details>

<details><summary><strong>form-captcha:</strong> 1 item(s)</summary>

- form[0]

</details>

---

### Links

*0 error(s), 2 warning(s)*

#### Orphan Pages **[WARN]**

`links/orphan-pages`

> Detects pages with no internal links pointing to them

**Solution:**

Orphan pages have no internal links and are hard for search engines to discover. They may not get indexed or rank well. Add internal links from relevant pages. Include in navigation or sidebar. Add to sitemap. Create contextual links from related content. If intentionally orphaned (e.g., landing pages), ensure they're accessible via sitemap.

| Check | Status | Message |
|-------|--------|---------|
| orphan-pages | ! warn | 96 orphan page(s) with <2 incoming links |

<details><summary><strong>orphan-pages:</strong> 96 item(s)</summary>

- [http://localhost:3000/category/control](http://localhost:3000/category/control)
- [http://localhost:3000/category/motion](http://localhost:3000/category/motion)
- [http://localhost:3000/category/interface](http://localhost:3000/category/interface)
- [http://localhost:3000/audit/1336](http://localhost:3000/audit/1336)
- [http://localhost:3000/audit/1394](http://localhost:3000/audit/1394)
- [http://localhost:3000/audit/1746](http://localhost:3000/audit/1746)
- [http://localhost:3000/audit/1747](http://localhost:3000/audit/1747)
- [http://localhost:3000/audit/1756](http://localhost:3000/audit/1756)
- [http://localhost:3000/audit/1771](http://localhost:3000/audit/1771)
- [http://localhost:3000/audit/1794](http://localhost:3000/audit/1794)
- [http://localhost:3000/audit/2094](http://localhost:3000/audit/2094)
- [http://localhost:3000/audit/2198](http://localhost:3000/audit/2198)
- [http://localhost:3000/audit/2500](http://localhost:3000/audit/2500)
- [http://localhost:3000/audit/3200](http://localhost:3000/audit/3200)
- [http://localhost:3000/audit/5069](http://localhost:3000/audit/5069)
- [http://localhost:3000/audit/5561](http://localhost:3000/audit/5561)
- [http://localhost:3000/audit/6000](http://localhost:3000/audit/6000)
- [http://localhost:3000/audit/6064](http://localhost:3000/audit/6064)
- [http://localhost:3000/audit/51309148](http://localhost:3000/audit/51309148)
- [http://localhost:3000/audit/1756-IA8D](http://localhost:3000/audit/1756-IA8D)
- [http://localhost:3000/audit/1756-IA16I](http://localhost:3000/audit/1756-IA16I)
- [http://localhost:3000/audit/1756-IM16I](http://localhost:3000/audit/1756-IM16I)
- [http://localhost:3000/audit/1756-IA32](http://localhost:3000/audit/1756-IA32)
- [http://localhost:3000/audit/1756-IN16](http://localhost:3000/audit/1756-IN16)
- [http://localhost:3000/audit/1756-OA8](http://localhost:3000/audit/1756-OA8)
- [http://localhost:3000/audit/1756-OA8D](http://localhost:3000/audit/1756-OA8D)
- [http://localhost:3000/audit/1756-OA8E](http://localhost:3000/audit/1756-OA8E)
- [http://localhost:3000/audit/1756-OA16](http://localhost:3000/audit/1756-OA16)
- [http://localhost:3000/audit/1756-OA16I](http://localhost:3000/audit/1756-OA16I)
- [http://localhost:3000/audit/1756-ON8](http://localhost:3000/audit/1756-ON8)
- [http://localhost:3000/audit/1756-IB16](http://localhost:3000/audit/1756-IB16)
- [http://localhost:3000/audit/1756-IB16D](http://localhost:3000/audit/1756-IB16D)
- [http://localhost:3000/audit/1756-IB16I](http://localhost:3000/audit/1756-IB16I)
- [http://localhost:3000/audit/1756-IB16IF](http://localhost:3000/audit/1756-IB16IF)
- [http://localhost:3000/audit/1756-IB16ISOE](http://localhost:3000/audit/1756-IB16ISOE)
- [http://localhost:3000/audit/1756-IB32](http://localhost:3000/audit/1756-IB32)
- [http://localhost:3000/audit/1756-IC16](http://localhost:3000/audit/1756-IC16)
- [http://localhost:3000/audit/1756-IG16](http://localhost:3000/audit/1756-IG16)
- [http://localhost:3000/audit/1756-IH16I](http://localhost:3000/audit/1756-IH16I)
- [http://localhost:3000/audit/1756-IV16](http://localhost:3000/audit/1756-IV16)
- [http://localhost:3000/audit/1756-IV32](http://localhost:3000/audit/1756-IV32)
- [http://localhost:3000/audit/1756-OB8](http://localhost:3000/audit/1756-OB8)
- [http://localhost:3000/audit/1756-OB8EI](http://localhost:3000/audit/1756-OB8EI)
- [http://localhost:3000/audit/1756-OB8I](http://localhost:3000/audit/1756-OB8I)
- [http://localhost:3000/audit/1756-OB16D](http://localhost:3000/audit/1756-OB16D)
- [http://localhost:3000/audit/1756-OB16E](http://localhost:3000/audit/1756-OB16E)
- [http://localhost:3000/audit/1756-OB16IEF](http://localhost:3000/audit/1756-OB16IEF)
- [http://localhost:3000/audit/1756-OB16I](http://localhost:3000/audit/1756-OB16I)
- [http://localhost:3000/audit/1756-OB32](http://localhost:3000/audit/1756-OB32)
- [http://localhost:3000/audit/1756-OC8](http://localhost:3000/audit/1756-OC8)
- [http://localhost:3000/audit/1756-OG16](http://localhost:3000/audit/1756-OG16)
- [http://localhost:3000/audit/1756-OH8I](http://localhost:3000/audit/1756-OH8I)
- [http://localhost:3000/audit/1756-OV16E](http://localhost:3000/audit/1756-OV16E)
- [http://localhost:3000/audit/1756-IF8](http://localhost:3000/audit/1756-IF8)
- [http://localhost:3000/audit/1756-IF8I](http://localhost:3000/audit/1756-IF8I)
- [http://localhost:3000/audit/1756-IF16I](http://localhost:3000/audit/1756-IF16I)
- [http://localhost:3000/audit/1756-IR6I](http://localhost:3000/audit/1756-IR6I)
- [http://localhost:3000/audit/1756-IRT8I](http://localhost:3000/audit/1756-IRT8I)
- [http://localhost:3000/audit/1756-IR12](http://localhost:3000/audit/1756-IR12)
- [http://localhost:3000/audit/1756-IT6I](http://localhost:3000/audit/1756-IT6I)
- [http://localhost:3000/audit/1756-IT16](http://localhost:3000/audit/1756-IT16)
- [http://localhost:3000/audit/1756-OF4](http://localhost:3000/audit/1756-OF4)
- [http://localhost:3000/audit/1756-OF8](http://localhost:3000/audit/1756-OF8)
- [http://localhost:3000/audit/1756-OF8I](http://localhost:3000/audit/1756-OF8I)
- [http://localhost:3000/audit/1756-EWEB](http://localhost:3000/audit/1756-EWEB)
- [http://localhost:3000/audit/1756-DHRIO](http://localhost:3000/audit/1756-DHRIO)
- [http://localhost:3000/audit/1756-ENBT](http://localhost:3000/audit/1756-ENBT)
- [http://localhost:3000/audit/1756-CNB](http://localhost:3000/audit/1756-CNB)
- [http://localhost:3000/audit/1756-CNBR](http://localhost:3000/audit/1756-CNBR)
- [http://localhost:3000/audit/1756-DNB](http://localhost:3000/audit/1756-DNB)
- [http://localhost:3000/audit/1756-L61](http://localhost:3000/audit/1756-L61)
- [http://localhost:3000/audit/1756-L62](http://localhost:3000/audit/1756-L62)
- [http://localhost:3000/audit/1756-L63](http://localhost:3000/audit/1756-L63)
- [http://localhost:3000/audit/1756-L55](http://localhost:3000/audit/1756-L55)
- [http://localhost:3000/audit/1747-L531](http://localhost:3000/audit/1747-L531)
- [http://localhost:3000/audit/1746-IA8](http://localhost:3000/audit/1746-IA8)
- [http://localhost:3000/audit/1746-IN16](http://localhost:3000/audit/1746-IN16)
- [http://localhost:3000/audit/1746-IB8](http://localhost:3000/audit/1746-IB8)
- [http://localhost:3000/audit/1746-IO12DC](http://localhost:3000/audit/1746-IO12DC)
- [http://localhost:3000/audit/1746-OB8](http://localhost:3000/audit/1746-OB8)
- [http://localhost:3000/audit/1746-HSCE2](http://localhost:3000/audit/1746-HSCE2)
- [http://localhost:3000/audit/1746-BTM](http://localhost:3000/audit/1746-BTM)
- [http://localhost:3000/audit/1746-HSCE](http://localhost:3000/audit/1746-HSCE)
- [http://localhost:3000/audit/1746-HSTP1](http://localhost:3000/audit/1746-HSTP1)
- [http://localhost:3000/audit/1746-QS](http://localhost:3000/audit/1746-QS)
- [http://localhost:3000/audit/1746-QV](http://localhost:3000/audit/1746-QV)
- [http://localhost:3000/audit/1747-SCNR](http://localhost:3000/audit/1747-SCNR)
- [http://localhost:3000/audit/1747-SDN](http://localhost:3000/audit/1747-SDN)
- [http://localhost:3000/audit/1747-SN](http://localhost:3000/audit/1747-SN)
- [http://localhost:3000/audit/1746-NIO4V](http://localhost:3000/audit/1746-NIO4V)
- [http://localhost:3000/audit/1746-NIO4I](http://localhost:3000/audit/1746-NIO4I)
- [http://localhost:3000/audit/1746-NO4I](http://localhost:3000/audit/1746-NO4I)
- [http://localhost:3000/audit/1746-NO4V](http://localhost:3000/audit/1746-NO4V)
- [http://localhost:3000/audit/6ES7212-1AB23-0XB0](http://localhost:3000/audit/6ES7212-1AB23-0XB0)
- [http://localhost:3000/audit/6ES7212-1BB23-0XB0](http://localhost:3000/audit/6ES7212-1BB23-0XB0)
- [http://localhost:3000/audit/6ES7214-1AD23-0XB0](http://localhost:3000/audit/6ES7214-1AD23-0XB0)

</details>

---

#### Weak Internal Links **[WARN]**

`links/weak-internal-links`

> Detects pages with only 1 dofollow internal link pointing to them

**Solution:**

Pages with only a single internal link have weak internal linking support and may struggle to rank. Search engines use internal links to understand page importance and distribute link equity. Add contextual links from related content, include in navigation or sidebar, or link from category/hub pages to strengthen internal link profiles.

| Check | Status | Message |
|-------|--------|---------|
| weak-internal-links | ! warn | 19 page(s) have only 1 internal link |

<details><summary><strong>weak-internal-links:</strong> 19 item(s)</summary>

- [http://localhost:3000/audit/1756](http://localhost:3000/audit/1756)
- [http://localhost:3000/audit/2094](http://localhost:3000/audit/2094)
- [http://localhost:3000/audit/2198](http://localhost:3000/audit/2198)
- [http://localhost:3000/audit/6000](http://localhost:3000/audit/6000)
- [http://localhost:3000/audit/1756-IA8D](http://localhost:3000/audit/1756-IA8D)
- [http://localhost:3000/audit/1756-IA16I](http://localhost:3000/audit/1756-IA16I)
- [http://localhost:3000/audit/1756-IM16I](http://localhost:3000/audit/1756-IM16I)
- [http://localhost:3000/audit/1756-IA32](http://localhost:3000/audit/1756-IA32)
- [http://localhost:3000/audit/1756-IN16](http://localhost:3000/audit/1756-IN16)
- [http://localhost:3000/audit/1756-OA8](http://localhost:3000/audit/1756-OA8)
- [http://localhost:3000/audit/1756-OA8D](http://localhost:3000/audit/1756-OA8D)
- [http://localhost:3000/audit/1756-OA8E](http://localhost:3000/audit/1756-OA8E)
- [http://localhost:3000/audit/1756-OA16](http://localhost:3000/audit/1756-OA16)
- [http://localhost:3000/audit/1756-OA16I](http://localhost:3000/audit/1756-OA16I)
- [http://localhost:3000/audit/1756-ON8](http://localhost:3000/audit/1756-ON8)
- [http://localhost:3000/audit/1756-IB16](http://localhost:3000/audit/1756-IB16)
- [http://localhost:3000/audit/1756-IB16D](http://localhost:3000/audit/1756-IB16D)
- [http://localhost:3000/audit/1756-ENBT](http://localhost:3000/audit/1756-ENBT)
- [http://localhost:3000/audit/1756-L61](http://localhost:3000/audit/1756-L61)

</details>

---

### Content

*0 error(s), 10 warning(s)*

#### Keyword Stuffing **[WARN]**

`content/keyword-stuffing`

> Detects excessive keyword repetition in content

**Solution:**

Keyword stuffing is repeating words unnaturally to manipulate rankings. Search engines penalize this practice. Write naturally for users first. Use keywords where they fit naturally. Aim for 1-2% keyword density at most. Use synonyms and related terms instead of repeating the exact same phrase. Focus on providing value, not gaming algorithms.

| Check | Status | Message |
|-------|--------|---------|
| keyword-stuffing | ! warn | N word(s) may be overused |

<details><summary><strong>keyword-stuffing:</strong> 5 page(s) affected</summary>

- [/](http://localhost:3000/)
- [/contact](http://localhost:3000/contact)
- [/category/control](http://localhost:3000/category/control)
- [/category/motion](http://localhost:3000/category/motion)
- [/category/interface](http://localhost:3000/category/interface)

</details>

<details><summary><strong>keyword-stuffing:</strong> 9 item(s)</summary>

- "auditcritical" (6.9%)
- "bradley" (6.9%)
- "controllogixcontrollogixenter" (6.9%)
- "allen" (3.5%)
- "ghost" (5.0%)
- "control" (3.2%)
- "automationenter" (6.6%)
- "auditmedium" (3.6%)
- "hmi" (4.2%)

</details>

---

#### Word Count **[WARN]**

`content/word-count`

> Checks content length for thin content issues

**Solution:**

Pages with thin content (under 300 words) often struggle to rank well and are actively deindexed by Google since the June 2025 core update. Add more valuable, relevant content to thin pages—aim for at least 500 words for standard pages and 1000+ for in-depth articles. If a page can't be fleshed out, voluntarily noindex it or consolidate it into a more comprehensive resource. Trimming thin pages from your index is better than leaving low-value content for Google to penalize.

| Check | Status | Message |
|-------|--------|---------|
| word-count | ! warn | Thin content: N words (min N) |

<details><summary><strong>word-count:</strong> 5 page(s) affected</summary>

- [/](http://localhost:3000/)
- [/contact](http://localhost:3000/contact)
- [/category/control](http://localhost:3000/category/control)
- [/category/motion](http://localhost:3000/category/motion)
- [/category/interface](http://localhost:3000/category/interface)

</details>

<details><summary><strong>word-count:</strong> 5 item(s)</summary>

- [Thin content: 182 words (min 300)](http://localhost:3000/)
- [Thin content: 125 words (min 300)](http://localhost:3000/contact)
- [Thin content: 199 words (min 300)](http://localhost:3000/category/control)
- [Thin content: 209 words (min 300)](http://localhost:3000/category/motion)
- [Thin content: 151 words (min 300)](http://localhost:3000/category/interface)

</details>

---

### Performance

*31 error(s), 638 warning(s)*

#### JavaScript File Size Too Large **[ERROR]**

`perf/js-file-size`

> Checks for JavaScript files that exceed recommended size limits

**Solution:**

Large JavaScript files block the main thread and delay interactivity. Code-split bundles into smaller chunks, tree-shake unused exports, lazy-load non-critical scripts, and defer or async load third-party scripts. Use dynamic imports for route-based splitting.

| Check | Status | Message |
|-------|--------|---------|
| js-file-size-warn | ! warn | 3 JS file(s) exceed 250.0 KB |

<details><summary><strong>js-file-size-warn:</strong> 3 item(s)</summary>

- [http://localhost:3000/_next/static/chunks/9ace1_next_dist_compiled_react-dom_1ea6f237._.js](http://localhost:3000/_next/static/chunks/9ace1_next_dist_compiled_react-dom_1ea6f237._.js)
  - from: [/](http://localhost:3000/)
  - from: [/about](http://localhost:3000/about)
  - from: [/contact](http://localhost:3000/contact)
  - ... +97 more pages
- [http://localhost:3000/_next/static/chunks/9ace1_next_dist_compiled_next-devtools_index_71297dc5.js](http://localhost:3000/_next/static/chunks/9ace1_next_dist_compiled_next-devtools_index_71297dc5.js)
  - from: [/](http://localhost:3000/)
  - from: [/about](http://localhost:3000/about)
  - from: [/contact](http://localhost:3000/contact)
  - ... +97 more pages
- [http://localhost:3000/_next/static/chunks/9ace1_next_dist_client_5a3ef046._.js](http://localhost:3000/_next/static/chunks/9ace1_next_dist_client_5a3ef046._.js)
  - from: [/](http://localhost:3000/)
  - from: [/about](http://localhost:3000/about)
  - from: [/contact](http://localhost:3000/contact)
  - ... +97 more pages

</details>

---

#### Time to First Byte **[WARN]**

`perf/ttfb`

> Measures server response time (TTFB)

**Solution:**

Time to First Byte (TTFB) measures how quickly your server responds. Slow TTFB indicates server/backend issues.

Thresholds (Core Web Vitals):
- Good: < 600ms
- Needs improvement: 600-1000ms
- Poor: > 1000ms

Fixes for slow TTFB:
- Enable server caching (Redis, Varnish, CDN)
- Optimize database queries
- Use CDN for static assets
- Upgrade server resources
- Reduce server-side processing
- Enable HTTP/2 or HTTP/3
- Use edge computing (Cloudflare Workers, Vercel Edge)

| Check | Status | Message |
|-------|--------|---------|
| ttfb | ! warn | Slow server response (Nms) |
| ttfb | X fail | Very slow server response (Nms) |

<details><summary><strong>ttfb:</strong> 36 page(s) affected</summary>

- [/](http://localhost:3000/)
- [/about](http://localhost:3000/about)
- [/category/interface](http://localhost:3000/category/interface)
- [/audit/1747](http://localhost:3000/audit/1747)
- [/audit/1756](http://localhost:3000/audit/1756)
- [/audit/1794](http://localhost:3000/audit/1794)
- [/audit/5561](http://localhost:3000/audit/5561)
- [/audit/51309148](http://localhost:3000/audit/51309148)
- [/audit/1756-IA32](http://localhost:3000/audit/1756-IA32)
- [/audit/1756-OA8E](http://localhost:3000/audit/1756-OA8E)
- [/audit/1756-OA16I](http://localhost:3000/audit/1756-OA16I)
- [/audit/1756-IB16](http://localhost:3000/audit/1756-IB16)
- [/audit/1756-IB16D](http://localhost:3000/audit/1756-IB16D)
- [/audit/1756-IB16IF](http://localhost:3000/audit/1756-IB16IF)
- [/audit/1756-IB32](http://localhost:3000/audit/1756-IB32)
- [/audit/1756-IV16](http://localhost:3000/audit/1756-IV16)
- [/audit/1756-IV32](http://localhost:3000/audit/1756-IV32)
- [/audit/1756-OB16D](http://localhost:3000/audit/1756-OB16D)
- [/audit/1756-OB16I](http://localhost:3000/audit/1756-OB16I)
- [/audit/1756-OB32](http://localhost:3000/audit/1756-OB32)
- [/audit/1756-IF8I](http://localhost:3000/audit/1756-IF8I)
- [/audit/1756-IRT8I](http://localhost:3000/audit/1756-IRT8I)
- [/audit/1756-IT16](http://localhost:3000/audit/1756-IT16)
- [/audit/1756-OF4](http://localhost:3000/audit/1756-OF4)
- [/audit/1756-OF8I](http://localhost:3000/audit/1756-OF8I)
- [/audit/1756-DHRIO](http://localhost:3000/audit/1756-DHRIO)
- [/audit/1756-ENBT](http://localhost:3000/audit/1756-ENBT)
- [/audit/1756-CNBR](http://localhost:3000/audit/1756-CNBR)
- [/audit/1756-L63](http://localhost:3000/audit/1756-L63)
- [/audit/1746-IO12DC](http://localhost:3000/audit/1746-IO12DC)
- [/audit/1746-HSCE](http://localhost:3000/audit/1746-HSCE)
- [/audit/1747-SCNR](http://localhost:3000/audit/1747-SCNR)
- [/audit/1747-SN](http://localhost:3000/audit/1747-SN)
- [/audit/1746-NIO4V](http://localhost:3000/audit/1746-NIO4V)
- [/audit/1746-NIO4I](http://localhost:3000/audit/1746-NIO4I)
- [/audit/6ES7212-1AB23-0XB0](http://localhost:3000/audit/6ES7212-1AB23-0XB0)

</details>

<details><summary><strong>ttfb:</strong> 36 item(s)</summary>

- [Slow server response (899ms)](http://localhost:3000/)
- [Slow server response (900ms)](http://localhost:3000/about)
- [Slow server response (704ms)](http://localhost:3000/category/interface)
- [Slow server response (863ms)](http://localhost:3000/audit/1747)
- [Slow server response (618ms)](http://localhost:3000/audit/1756)
- [Slow server response (744ms)](http://localhost:3000/audit/1794)
- [Slow server response (675ms)](http://localhost:3000/audit/5561)
- [Slow server response (704ms)](http://localhost:3000/audit/51309148)
- [Slow server response (886ms)](http://localhost:3000/audit/1756-IA32)
- [Slow server response (987ms)](http://localhost:3000/audit/1756-OA8E)
- [Slow server response (903ms)](http://localhost:3000/audit/1756-OA16I)
- [Slow server response (907ms)](http://localhost:3000/audit/1756-IB16)
- [Slow server response (857ms)](http://localhost:3000/audit/1756-IB16D)
- [Slow server response (999ms)](http://localhost:3000/audit/1756-IB16IF)
- [Slow server response (746ms)](http://localhost:3000/audit/1756-IB32)
- [Slow server response (957ms)](http://localhost:3000/audit/1756-IV16)
- [Slow server response (677ms)](http://localhost:3000/audit/1756-IV32)
- [Slow server response (913ms)](http://localhost:3000/audit/1756-OB16D)
- [Slow server response (792ms)](http://localhost:3000/audit/1756-OB16I)
- [Slow server response (613ms)](http://localhost:3000/audit/1756-OB32)
- [Slow server response (879ms)](http://localhost:3000/audit/1756-IF8I)
- [Slow server response (857ms)](http://localhost:3000/audit/1756-IRT8I)
- [Slow server response (998ms)](http://localhost:3000/audit/1756-IT16)
- [Slow server response (754ms)](http://localhost:3000/audit/1756-OF4)
- [Slow server response (886ms)](http://localhost:3000/audit/1756-OF8I)
- [Slow server response (698ms)](http://localhost:3000/audit/1756-DHRIO)
- [Slow server response (776ms)](http://localhost:3000/audit/1756-ENBT)
- [Slow server response (868ms)](http://localhost:3000/audit/1756-CNBR)
- [Slow server response (796ms)](http://localhost:3000/audit/1756-L63)
- [Slow server response (789ms)](http://localhost:3000/audit/1746-IO12DC)
- [Slow server response (773ms)](http://localhost:3000/audit/1746-HSCE)
- [Slow server response (963ms)](http://localhost:3000/audit/1747-SCNR)
- [Slow server response (625ms)](http://localhost:3000/audit/1747-SN)
- [Slow server response (928ms)](http://localhost:3000/audit/1746-NIO4V)
- [Slow server response (606ms)](http://localhost:3000/audit/1746-NIO4I)
- [Slow server response (682ms)](http://localhost:3000/audit/6ES7212-1AB23-0XB0)

</details>

<details><summary><strong>ttfb:</strong> 31 page(s) affected</summary>

- [/category/control](http://localhost:3000/category/control)
- [/category/motion](http://localhost:3000/category/motion)
- [/audit/1336](http://localhost:3000/audit/1336)
- [/audit/1771](http://localhost:3000/audit/1771)
- [/audit/2094](http://localhost:3000/audit/2094)
- [/audit/3200](http://localhost:3000/audit/3200)
- [/audit/1756-IA8D](http://localhost:3000/audit/1756-IA8D)
- [/audit/1756-IA16](http://localhost:3000/audit/1756-IA16)
- [/audit/1756-OA16](http://localhost:3000/audit/1756-OA16)
- [/audit/1756-ON8](http://localhost:3000/audit/1756-ON8)
- [/audit/1756-IB16I](http://localhost:3000/audit/1756-IB16I)
- [/audit/1756-IB16ISOE](http://localhost:3000/audit/1756-IB16ISOE)
- [/audit/1756-IG16](http://localhost:3000/audit/1756-IG16)
- [/audit/1756-OB8EI](http://localhost:3000/audit/1756-OB8EI)
- [/audit/1756-OV16E](http://localhost:3000/audit/1756-OV16E)
- [/audit/1756-IR12](http://localhost:3000/audit/1756-IR12)
- [/audit/1756-IT6I](http://localhost:3000/audit/1756-IT6I)
- [/audit/1756-OF8](http://localhost:3000/audit/1756-OF8)
- [/audit/1756-EWEB](http://localhost:3000/audit/1756-EWEB)
- [/audit/1756-CNB](http://localhost:3000/audit/1756-CNB)
- [/audit/1756-DNB](http://localhost:3000/audit/1756-DNB)
- [/audit/1756-L61](http://localhost:3000/audit/1756-L61)
- [/audit/1756-L55](http://localhost:3000/audit/1756-L55)
- [/audit/1747-L531](http://localhost:3000/audit/1747-L531)
- [/audit/1746-IB8](http://localhost:3000/audit/1746-IB8)
- [/audit/1746-OB8](http://localhost:3000/audit/1746-OB8)
- [/audit/1746-QV](http://localhost:3000/audit/1746-QV)
- [/audit/1747-SDN](http://localhost:3000/audit/1747-SDN)
- [/audit/1746-NO4I](http://localhost:3000/audit/1746-NO4I)
- [/audit/1746-NO4V](http://localhost:3000/audit/1746-NO4V)
- [/audit/6ES7212-1BB23-0XB0](http://localhost:3000/audit/6ES7212-1BB23-0XB0)

</details>

<details><summary><strong>ttfb:</strong> 31 item(s)</summary>

- [Very slow server response (1417ms)](http://localhost:3000/category/control)
- [Very slow server response (1094ms)](http://localhost:3000/category/motion)
- [Very slow server response (1411ms)](http://localhost:3000/audit/1336)
- [Very slow server response (1386ms)](http://localhost:3000/audit/1771)
- [Very slow server response (1471ms)](http://localhost:3000/audit/2094)
- [Very slow server response (1764ms)](http://localhost:3000/audit/3200)
- [Very slow server response (1323ms)](http://localhost:3000/audit/1756-IA8D)
- [Very slow server response (1760ms)](http://localhost:3000/audit/1756-IA16)
- [Very slow server response (2102ms)](http://localhost:3000/audit/1756-OA16)
- [Very slow server response (1432ms)](http://localhost:3000/audit/1756-ON8)
- [Very slow server response (1660ms)](http://localhost:3000/audit/1756-IB16I)
- [Very slow server response (1727ms)](http://localhost:3000/audit/1756-IB16ISOE)
- [Very slow server response (1268ms)](http://localhost:3000/audit/1756-IG16)
- [Very slow server response (1497ms)](http://localhost:3000/audit/1756-OB8EI)
- [Very slow server response (1404ms)](http://localhost:3000/audit/1756-OV16E)
- [Very slow server response (1924ms)](http://localhost:3000/audit/1756-IR12)
- [Very slow server response (3065ms)](http://localhost:3000/audit/1756-IT6I)
- [Very slow server response (2251ms)](http://localhost:3000/audit/1756-OF8)
- [Very slow server response (1525ms)](http://localhost:3000/audit/1756-EWEB)
- [Very slow server response (1389ms)](http://localhost:3000/audit/1756-CNB)
- [Very slow server response (1437ms)](http://localhost:3000/audit/1756-DNB)
- [Very slow server response (3265ms)](http://localhost:3000/audit/1756-L61)
- [Very slow server response (1695ms)](http://localhost:3000/audit/1756-L55)
- [Very slow server response (2546ms)](http://localhost:3000/audit/1747-L531)
- [Very slow server response (1132ms)](http://localhost:3000/audit/1746-IB8)
- [Very slow server response (1138ms)](http://localhost:3000/audit/1746-OB8)
- [Very slow server response (1356ms)](http://localhost:3000/audit/1746-QV)
- [Very slow server response (1322ms)](http://localhost:3000/audit/1747-SDN)
- [Very slow server response (1052ms)](http://localhost:3000/audit/1746-NO4I)
- [Very slow server response (1240ms)](http://localhost:3000/audit/1746-NO4V)
- [Very slow server response (1440ms)](http://localhost:3000/audit/6ES7212-1BB23-0XB0)

</details>

---

#### Total Page Weight **[WARN]**

`perf/total-byte-weight`

> Checks the total byte weight of the page

**Solution:**

Reduce total page weight for faster loads on slow connections. Optimize images (use modern formats, compress, serve appropriate sizes). Minify and compress CSS/JS. Remove unused code via tree-shaking. Lazy-load non-critical resources. Target under 1.6MB for mobile users.

| Check | Status | Message |
|-------|--------|---------|
| total-byte-weight | ! warn | Total tracked resources: 3234KB (heavy page) |

---

#### Critical Request Chains **[WARN]**

`perf/critical-request-chains`

> Identifies chains of dependent resources that delay rendering

**Solution:**

Critical request chains are sequences of dependent network requests that must complete before the page can render. Reduce chain depth by: 1) Inlining critical CSS instead of linking external files. 2) Adding async or defer to non-critical scripts. 3) Avoiding CSS @import — use <link> tags instead. 4) Using <link rel='preload'> for critical resources. 5) Reducing the number of render-blocking resources in <head>.

| Check | Status | Message |
|-------|--------|---------|
| critical-request-chains | ! warn | 2 critical request chain(s) found |

<details><summary><strong>critical-request-chains:</strong> 100 page(s) affected</summary>

- [/](http://localhost:3000/)
- [/about](http://localhost:3000/about)
- [/contact](http://localhost:3000/contact)
- [/category/control](http://localhost:3000/category/control)
- [/category/motion](http://localhost:3000/category/motion)
- [/category/interface](http://localhost:3000/category/interface)
- [/audit/1336](http://localhost:3000/audit/1336)
- [/audit/1394](http://localhost:3000/audit/1394)
- [/audit/1746](http://localhost:3000/audit/1746)
- [/audit/1747](http://localhost:3000/audit/1747)
- [/audit/1756](http://localhost:3000/audit/1756)
- [/audit/1771](http://localhost:3000/audit/1771)
- [/audit/1794](http://localhost:3000/audit/1794)
- [/audit/2094](http://localhost:3000/audit/2094)
- [/audit/2198](http://localhost:3000/audit/2198)
- [/audit/2500](http://localhost:3000/audit/2500)
- [/audit/3200](http://localhost:3000/audit/3200)
- [/audit/5069](http://localhost:3000/audit/5069)
- [/audit/5561](http://localhost:3000/audit/5561)
- [/audit/6000](http://localhost:3000/audit/6000)
- [/audit/6064](http://localhost:3000/audit/6064)
- [/audit/51309148](http://localhost:3000/audit/51309148)
- [/audit/1756-IA8D](http://localhost:3000/audit/1756-IA8D)
- [/audit/1756-IA16](http://localhost:3000/audit/1756-IA16)
- [/audit/1756-IA16I](http://localhost:3000/audit/1756-IA16I)
- [/audit/1756-IM16I](http://localhost:3000/audit/1756-IM16I)
- [/audit/1756-IA32](http://localhost:3000/audit/1756-IA32)
- [/audit/1756-IN16](http://localhost:3000/audit/1756-IN16)
- [/audit/1756-OA8](http://localhost:3000/audit/1756-OA8)
- [/audit/1756-OA8D](http://localhost:3000/audit/1756-OA8D)
- [/audit/1756-OA8E](http://localhost:3000/audit/1756-OA8E)
- [/audit/1756-OA16](http://localhost:3000/audit/1756-OA16)
- [/audit/1756-OA16I](http://localhost:3000/audit/1756-OA16I)
- [/audit/1756-ON8](http://localhost:3000/audit/1756-ON8)
- [/audit/1756-IB16](http://localhost:3000/audit/1756-IB16)
- [/audit/1756-IB16D](http://localhost:3000/audit/1756-IB16D)
- [/audit/1756-IB16I](http://localhost:3000/audit/1756-IB16I)
- [/audit/1756-IB16IF](http://localhost:3000/audit/1756-IB16IF)
- [/audit/1756-IB16ISOE](http://localhost:3000/audit/1756-IB16ISOE)
- [/audit/1756-IB32](http://localhost:3000/audit/1756-IB32)
- [/audit/1756-IC16](http://localhost:3000/audit/1756-IC16)
- [/audit/1756-IG16](http://localhost:3000/audit/1756-IG16)
- [/audit/1756-IH16I](http://localhost:3000/audit/1756-IH16I)
- [/audit/1756-IV16](http://localhost:3000/audit/1756-IV16)
- [/audit/1756-IV32](http://localhost:3000/audit/1756-IV32)
- [/audit/1756-OB8](http://localhost:3000/audit/1756-OB8)
- [/audit/1756-OB8EI](http://localhost:3000/audit/1756-OB8EI)
- [/audit/1756-OB8I](http://localhost:3000/audit/1756-OB8I)
- [/audit/1756-OB16D](http://localhost:3000/audit/1756-OB16D)
- [/audit/1756-OB16E](http://localhost:3000/audit/1756-OB16E)
- [/audit/1756-OB16IEF](http://localhost:3000/audit/1756-OB16IEF)
- [/audit/1756-OB16I](http://localhost:3000/audit/1756-OB16I)
- [/audit/1756-OB32](http://localhost:3000/audit/1756-OB32)
- [/audit/1756-OC8](http://localhost:3000/audit/1756-OC8)
- [/audit/1756-OG16](http://localhost:3000/audit/1756-OG16)
- [/audit/1756-OH8I](http://localhost:3000/audit/1756-OH8I)
- [/audit/1756-OV16E](http://localhost:3000/audit/1756-OV16E)
- [/audit/1756-IF8](http://localhost:3000/audit/1756-IF8)
- [/audit/1756-IF8I](http://localhost:3000/audit/1756-IF8I)
- [/audit/1756-IF16I](http://localhost:3000/audit/1756-IF16I)
- [/audit/1756-IR6I](http://localhost:3000/audit/1756-IR6I)
- [/audit/1756-IRT8I](http://localhost:3000/audit/1756-IRT8I)
- [/audit/1756-IR12](http://localhost:3000/audit/1756-IR12)
- [/audit/1756-IT6I](http://localhost:3000/audit/1756-IT6I)
- [/audit/1756-IT16](http://localhost:3000/audit/1756-IT16)
- [/audit/1756-OF4](http://localhost:3000/audit/1756-OF4)
- [/audit/1756-OF8](http://localhost:3000/audit/1756-OF8)
- [/audit/1756-OF8I](http://localhost:3000/audit/1756-OF8I)
- [/audit/1756-EWEB](http://localhost:3000/audit/1756-EWEB)
- [/audit/1756-DHRIO](http://localhost:3000/audit/1756-DHRIO)
- [/audit/1756-ENBT](http://localhost:3000/audit/1756-ENBT)
- [/audit/1756-CNB](http://localhost:3000/audit/1756-CNB)
- [/audit/1756-CNBR](http://localhost:3000/audit/1756-CNBR)
- [/audit/1756-DNB](http://localhost:3000/audit/1756-DNB)
- [/audit/1756-L61](http://localhost:3000/audit/1756-L61)
- [/audit/1756-L62](http://localhost:3000/audit/1756-L62)
- [/audit/1756-L63](http://localhost:3000/audit/1756-L63)
- [/audit/1756-L55](http://localhost:3000/audit/1756-L55)
- [/audit/1747-L531](http://localhost:3000/audit/1747-L531)
- [/audit/1746-IA8](http://localhost:3000/audit/1746-IA8)
- [/audit/1746-IN16](http://localhost:3000/audit/1746-IN16)
- [/audit/1746-IB8](http://localhost:3000/audit/1746-IB8)
- [/audit/1746-IO12DC](http://localhost:3000/audit/1746-IO12DC)
- [/audit/1746-OB8](http://localhost:3000/audit/1746-OB8)
- [/audit/1746-HSCE2](http://localhost:3000/audit/1746-HSCE2)
- [/audit/1746-BTM](http://localhost:3000/audit/1746-BTM)
- [/audit/1746-HSCE](http://localhost:3000/audit/1746-HSCE)
- [/audit/1746-HSTP1](http://localhost:3000/audit/1746-HSTP1)
- [/audit/1746-QS](http://localhost:3000/audit/1746-QS)
- [/audit/1746-QV](http://localhost:3000/audit/1746-QV)
- [/audit/1747-SCNR](http://localhost:3000/audit/1747-SCNR)
- [/audit/1747-SDN](http://localhost:3000/audit/1747-SDN)
- [/audit/1747-SN](http://localhost:3000/audit/1747-SN)
- [/audit/1746-NIO4V](http://localhost:3000/audit/1746-NIO4V)
- [/audit/1746-NIO4I](http://localhost:3000/audit/1746-NIO4I)
- [/audit/1746-NO4I](http://localhost:3000/audit/1746-NO4I)
- [/audit/1746-NO4V](http://localhost:3000/audit/1746-NO4V)
- [/audit/6ES7212-1AB23-0XB0](http://localhost:3000/audit/6ES7212-1AB23-0XB0)
- [/audit/6ES7212-1BB23-0XB0](http://localhost:3000/audit/6ES7212-1BB23-0XB0)
- [/audit/6ES7214-1AD23-0XB0](http://localhost:3000/audit/6ES7214-1AD23-0XB0)

</details>

<details><summary><strong>critical-request-chains:</strong> 2 item(s)</summary>

- CSS: /_next/static/chunks/%5Broot-of-the-server%5D__c1543b58._.css
- JS: /_next/static/chunks/9ace1_next_dist_build_polyfills_polyfill-nomodule.js

</details>

---

#### Duplicate JavaScript **[WARN]**

`perf/duplicate-js`

> Detects duplicate JavaScript libraries loaded multiple times

**Solution:**

Remove duplicate JavaScript library loads to reduce page weight and avoid conflicts. Check for the same library loaded from different CDNs or versions. Use a single source for each dependency. Consider using a module bundler to deduplicate shared dependencies.

| Check | Status | Message |
|-------|--------|---------|
| duplicate-js-same-version | ! warn | 1 library(s) loaded multiple times |

<details><summary><strong>duplicate-js-same-version:</strong> 100 page(s) affected</summary>

- [/](http://localhost:3000/)
- [/about](http://localhost:3000/about)
- [/contact](http://localhost:3000/contact)
- [/category/control](http://localhost:3000/category/control)
- [/category/motion](http://localhost:3000/category/motion)
- [/category/interface](http://localhost:3000/category/interface)
- [/audit/1336](http://localhost:3000/audit/1336)
- [/audit/1394](http://localhost:3000/audit/1394)
- [/audit/1746](http://localhost:3000/audit/1746)
- [/audit/1747](http://localhost:3000/audit/1747)
- [/audit/1756](http://localhost:3000/audit/1756)
- [/audit/1771](http://localhost:3000/audit/1771)
- [/audit/1794](http://localhost:3000/audit/1794)
- [/audit/2094](http://localhost:3000/audit/2094)
- [/audit/2198](http://localhost:3000/audit/2198)
- [/audit/2500](http://localhost:3000/audit/2500)
- [/audit/3200](http://localhost:3000/audit/3200)
- [/audit/5069](http://localhost:3000/audit/5069)
- [/audit/5561](http://localhost:3000/audit/5561)
- [/audit/6000](http://localhost:3000/audit/6000)
- [/audit/6064](http://localhost:3000/audit/6064)
- [/audit/51309148](http://localhost:3000/audit/51309148)
- [/audit/1756-IA8D](http://localhost:3000/audit/1756-IA8D)
- [/audit/1756-IA16](http://localhost:3000/audit/1756-IA16)
- [/audit/1756-IA16I](http://localhost:3000/audit/1756-IA16I)
- [/audit/1756-IM16I](http://localhost:3000/audit/1756-IM16I)
- [/audit/1756-IA32](http://localhost:3000/audit/1756-IA32)
- [/audit/1756-IN16](http://localhost:3000/audit/1756-IN16)
- [/audit/1756-OA8](http://localhost:3000/audit/1756-OA8)
- [/audit/1756-OA8D](http://localhost:3000/audit/1756-OA8D)
- [/audit/1756-OA8E](http://localhost:3000/audit/1756-OA8E)
- [/audit/1756-OA16](http://localhost:3000/audit/1756-OA16)
- [/audit/1756-OA16I](http://localhost:3000/audit/1756-OA16I)
- [/audit/1756-ON8](http://localhost:3000/audit/1756-ON8)
- [/audit/1756-IB16](http://localhost:3000/audit/1756-IB16)
- [/audit/1756-IB16D](http://localhost:3000/audit/1756-IB16D)
- [/audit/1756-IB16I](http://localhost:3000/audit/1756-IB16I)
- [/audit/1756-IB16IF](http://localhost:3000/audit/1756-IB16IF)
- [/audit/1756-IB16ISOE](http://localhost:3000/audit/1756-IB16ISOE)
- [/audit/1756-IB32](http://localhost:3000/audit/1756-IB32)
- [/audit/1756-IC16](http://localhost:3000/audit/1756-IC16)
- [/audit/1756-IG16](http://localhost:3000/audit/1756-IG16)
- [/audit/1756-IH16I](http://localhost:3000/audit/1756-IH16I)
- [/audit/1756-IV16](http://localhost:3000/audit/1756-IV16)
- [/audit/1756-IV32](http://localhost:3000/audit/1756-IV32)
- [/audit/1756-OB8](http://localhost:3000/audit/1756-OB8)
- [/audit/1756-OB8EI](http://localhost:3000/audit/1756-OB8EI)
- [/audit/1756-OB8I](http://localhost:3000/audit/1756-OB8I)
- [/audit/1756-OB16D](http://localhost:3000/audit/1756-OB16D)
- [/audit/1756-OB16E](http://localhost:3000/audit/1756-OB16E)
- [/audit/1756-OB16IEF](http://localhost:3000/audit/1756-OB16IEF)
- [/audit/1756-OB16I](http://localhost:3000/audit/1756-OB16I)
- [/audit/1756-OB32](http://localhost:3000/audit/1756-OB32)
- [/audit/1756-OC8](http://localhost:3000/audit/1756-OC8)
- [/audit/1756-OG16](http://localhost:3000/audit/1756-OG16)
- [/audit/1756-OH8I](http://localhost:3000/audit/1756-OH8I)
- [/audit/1756-OV16E](http://localhost:3000/audit/1756-OV16E)
- [/audit/1756-IF8](http://localhost:3000/audit/1756-IF8)
- [/audit/1756-IF8I](http://localhost:3000/audit/1756-IF8I)
- [/audit/1756-IF16I](http://localhost:3000/audit/1756-IF16I)
- [/audit/1756-IR6I](http://localhost:3000/audit/1756-IR6I)
- [/audit/1756-IRT8I](http://localhost:3000/audit/1756-IRT8I)
- [/audit/1756-IR12](http://localhost:3000/audit/1756-IR12)
- [/audit/1756-IT6I](http://localhost:3000/audit/1756-IT6I)
- [/audit/1756-IT16](http://localhost:3000/audit/1756-IT16)
- [/audit/1756-OF4](http://localhost:3000/audit/1756-OF4)
- [/audit/1756-OF8](http://localhost:3000/audit/1756-OF8)
- [/audit/1756-OF8I](http://localhost:3000/audit/1756-OF8I)
- [/audit/1756-EWEB](http://localhost:3000/audit/1756-EWEB)
- [/audit/1756-DHRIO](http://localhost:3000/audit/1756-DHRIO)
- [/audit/1756-ENBT](http://localhost:3000/audit/1756-ENBT)
- [/audit/1756-CNB](http://localhost:3000/audit/1756-CNB)
- [/audit/1756-CNBR](http://localhost:3000/audit/1756-CNBR)
- [/audit/1756-DNB](http://localhost:3000/audit/1756-DNB)
- [/audit/1756-L61](http://localhost:3000/audit/1756-L61)
- [/audit/1756-L62](http://localhost:3000/audit/1756-L62)
- [/audit/1756-L63](http://localhost:3000/audit/1756-L63)
- [/audit/1756-L55](http://localhost:3000/audit/1756-L55)
- [/audit/1747-L531](http://localhost:3000/audit/1747-L531)
- [/audit/1746-IA8](http://localhost:3000/audit/1746-IA8)
- [/audit/1746-IN16](http://localhost:3000/audit/1746-IN16)
- [/audit/1746-IB8](http://localhost:3000/audit/1746-IB8)
- [/audit/1746-IO12DC](http://localhost:3000/audit/1746-IO12DC)
- [/audit/1746-OB8](http://localhost:3000/audit/1746-OB8)
- [/audit/1746-HSCE2](http://localhost:3000/audit/1746-HSCE2)
- [/audit/1746-BTM](http://localhost:3000/audit/1746-BTM)
- [/audit/1746-HSCE](http://localhost:3000/audit/1746-HSCE)
- [/audit/1746-HSTP1](http://localhost:3000/audit/1746-HSTP1)
- [/audit/1746-QS](http://localhost:3000/audit/1746-QS)
- [/audit/1746-QV](http://localhost:3000/audit/1746-QV)
- [/audit/1747-SCNR](http://localhost:3000/audit/1747-SCNR)
- [/audit/1747-SDN](http://localhost:3000/audit/1747-SDN)
- [/audit/1747-SN](http://localhost:3000/audit/1747-SN)
- [/audit/1746-NIO4V](http://localhost:3000/audit/1746-NIO4V)
- [/audit/1746-NIO4I](http://localhost:3000/audit/1746-NIO4I)
- [/audit/1746-NO4I](http://localhost:3000/audit/1746-NO4I)
- [/audit/1746-NO4V](http://localhost:3000/audit/1746-NO4V)
- [/audit/6ES7212-1AB23-0XB0](http://localhost:3000/audit/6ES7212-1AB23-0XB0)
- [/audit/6ES7212-1BB23-0XB0](http://localhost:3000/audit/6ES7212-1BB23-0XB0)
- [/audit/6ES7214-1AD23-0XB0](http://localhost:3000/audit/6ES7214-1AD23-0XB0)

</details>

<details><summary><strong>duplicate-js-same-version:</strong> 2 item(s)</summary>

- niches (6x)
- niches (4x)

</details>

---

#### Unminified JavaScript **[WARN]**

`perf/unminified-js`

> Detects unminified JavaScript that could be optimized

**Solution:**

Minify JavaScript to reduce file size and improve load times. Use build tools like Terser, esbuild, or UglifyJS. Most bundlers (Webpack, Vite, Rollup) minify automatically in production. Minification shortens variable names, removes whitespace, and dead code.

| Check | Status | Message |
|-------|--------|---------|
| unminified-js | ! warn | 8 JavaScript file(s) appear unminified |

<details><summary><strong>unminified-js:</strong> 100 page(s) affected</summary>

- [/](http://localhost:3000/)
- [/about](http://localhost:3000/about)
- [/contact](http://localhost:3000/contact)
- [/category/control](http://localhost:3000/category/control)
- [/category/motion](http://localhost:3000/category/motion)
- [/category/interface](http://localhost:3000/category/interface)
- [/audit/1336](http://localhost:3000/audit/1336)
- [/audit/1394](http://localhost:3000/audit/1394)
- [/audit/1746](http://localhost:3000/audit/1746)
- [/audit/1747](http://localhost:3000/audit/1747)
- [/audit/1756](http://localhost:3000/audit/1756)
- [/audit/1771](http://localhost:3000/audit/1771)
- [/audit/1794](http://localhost:3000/audit/1794)
- [/audit/2094](http://localhost:3000/audit/2094)
- [/audit/2198](http://localhost:3000/audit/2198)
- [/audit/2500](http://localhost:3000/audit/2500)
- [/audit/3200](http://localhost:3000/audit/3200)
- [/audit/5069](http://localhost:3000/audit/5069)
- [/audit/5561](http://localhost:3000/audit/5561)
- [/audit/6000](http://localhost:3000/audit/6000)
- [/audit/6064](http://localhost:3000/audit/6064)
- [/audit/51309148](http://localhost:3000/audit/51309148)
- [/audit/1756-IA8D](http://localhost:3000/audit/1756-IA8D)
- [/audit/1756-IA16](http://localhost:3000/audit/1756-IA16)
- [/audit/1756-IA16I](http://localhost:3000/audit/1756-IA16I)
- [/audit/1756-IM16I](http://localhost:3000/audit/1756-IM16I)
- [/audit/1756-IA32](http://localhost:3000/audit/1756-IA32)
- [/audit/1756-IN16](http://localhost:3000/audit/1756-IN16)
- [/audit/1756-OA8](http://localhost:3000/audit/1756-OA8)
- [/audit/1756-OA8D](http://localhost:3000/audit/1756-OA8D)
- [/audit/1756-OA8E](http://localhost:3000/audit/1756-OA8E)
- [/audit/1756-OA16](http://localhost:3000/audit/1756-OA16)
- [/audit/1756-OA16I](http://localhost:3000/audit/1756-OA16I)
- [/audit/1756-ON8](http://localhost:3000/audit/1756-ON8)
- [/audit/1756-IB16](http://localhost:3000/audit/1756-IB16)
- [/audit/1756-IB16D](http://localhost:3000/audit/1756-IB16D)
- [/audit/1756-IB16I](http://localhost:3000/audit/1756-IB16I)
- [/audit/1756-IB16IF](http://localhost:3000/audit/1756-IB16IF)
- [/audit/1756-IB16ISOE](http://localhost:3000/audit/1756-IB16ISOE)
- [/audit/1756-IB32](http://localhost:3000/audit/1756-IB32)
- [/audit/1756-IC16](http://localhost:3000/audit/1756-IC16)
- [/audit/1756-IG16](http://localhost:3000/audit/1756-IG16)
- [/audit/1756-IH16I](http://localhost:3000/audit/1756-IH16I)
- [/audit/1756-IV16](http://localhost:3000/audit/1756-IV16)
- [/audit/1756-IV32](http://localhost:3000/audit/1756-IV32)
- [/audit/1756-OB8](http://localhost:3000/audit/1756-OB8)
- [/audit/1756-OB8EI](http://localhost:3000/audit/1756-OB8EI)
- [/audit/1756-OB8I](http://localhost:3000/audit/1756-OB8I)
- [/audit/1756-OB16D](http://localhost:3000/audit/1756-OB16D)
- [/audit/1756-OB16E](http://localhost:3000/audit/1756-OB16E)
- [/audit/1756-OB16IEF](http://localhost:3000/audit/1756-OB16IEF)
- [/audit/1756-OB16I](http://localhost:3000/audit/1756-OB16I)
- [/audit/1756-OB32](http://localhost:3000/audit/1756-OB32)
- [/audit/1756-OC8](http://localhost:3000/audit/1756-OC8)
- [/audit/1756-OG16](http://localhost:3000/audit/1756-OG16)
- [/audit/1756-OH8I](http://localhost:3000/audit/1756-OH8I)
- [/audit/1756-OV16E](http://localhost:3000/audit/1756-OV16E)
- [/audit/1756-IF8](http://localhost:3000/audit/1756-IF8)
- [/audit/1756-IF8I](http://localhost:3000/audit/1756-IF8I)
- [/audit/1756-IF16I](http://localhost:3000/audit/1756-IF16I)
- [/audit/1756-IR6I](http://localhost:3000/audit/1756-IR6I)
- [/audit/1756-IRT8I](http://localhost:3000/audit/1756-IRT8I)
- [/audit/1756-IR12](http://localhost:3000/audit/1756-IR12)
- [/audit/1756-IT6I](http://localhost:3000/audit/1756-IT6I)
- [/audit/1756-IT16](http://localhost:3000/audit/1756-IT16)
- [/audit/1756-OF4](http://localhost:3000/audit/1756-OF4)
- [/audit/1756-OF8](http://localhost:3000/audit/1756-OF8)
- [/audit/1756-OF8I](http://localhost:3000/audit/1756-OF8I)
- [/audit/1756-EWEB](http://localhost:3000/audit/1756-EWEB)
- [/audit/1756-DHRIO](http://localhost:3000/audit/1756-DHRIO)
- [/audit/1756-ENBT](http://localhost:3000/audit/1756-ENBT)
- [/audit/1756-CNB](http://localhost:3000/audit/1756-CNB)
- [/audit/1756-CNBR](http://localhost:3000/audit/1756-CNBR)
- [/audit/1756-DNB](http://localhost:3000/audit/1756-DNB)
- [/audit/1756-L61](http://localhost:3000/audit/1756-L61)
- [/audit/1756-L62](http://localhost:3000/audit/1756-L62)
- [/audit/1756-L63](http://localhost:3000/audit/1756-L63)
- [/audit/1756-L55](http://localhost:3000/audit/1756-L55)
- [/audit/1747-L531](http://localhost:3000/audit/1747-L531)
- [/audit/1746-IA8](http://localhost:3000/audit/1746-IA8)
- [/audit/1746-IN16](http://localhost:3000/audit/1746-IN16)
- [/audit/1746-IB8](http://localhost:3000/audit/1746-IB8)
- [/audit/1746-IO12DC](http://localhost:3000/audit/1746-IO12DC)
- [/audit/1746-OB8](http://localhost:3000/audit/1746-OB8)
- [/audit/1746-HSCE2](http://localhost:3000/audit/1746-HSCE2)
- [/audit/1746-BTM](http://localhost:3000/audit/1746-BTM)
- [/audit/1746-HSCE](http://localhost:3000/audit/1746-HSCE)
- [/audit/1746-HSTP1](http://localhost:3000/audit/1746-HSTP1)
- [/audit/1746-QS](http://localhost:3000/audit/1746-QS)
- [/audit/1746-QV](http://localhost:3000/audit/1746-QV)
- [/audit/1747-SCNR](http://localhost:3000/audit/1747-SCNR)
- [/audit/1747-SDN](http://localhost:3000/audit/1747-SDN)
- [/audit/1747-SN](http://localhost:3000/audit/1747-SN)
- [/audit/1746-NIO4V](http://localhost:3000/audit/1746-NIO4V)
- [/audit/1746-NIO4I](http://localhost:3000/audit/1746-NIO4I)
- [/audit/1746-NO4I](http://localhost:3000/audit/1746-NO4I)
- [/audit/1746-NO4V](http://localhost:3000/audit/1746-NO4V)
- [/audit/6ES7212-1AB23-0XB0](http://localhost:3000/audit/6ES7212-1AB23-0XB0)
- [/audit/6ES7212-1BB23-0XB0](http://localhost:3000/audit/6ES7212-1BB23-0XB0)
- [/audit/6ES7214-1AD23-0XB0](http://localhost:3000/audit/6ES7214-1AD23-0XB0)

</details>

<details><summary><strong>unminified-js:</strong> 5 item(s)</summary>

- 1023.7KB, ~259.9KB savings
- 167.2KB, ~53.6KB savings
- 796.9KB, ~722.7KB savings
- 141.8KB, ~60.3KB savings
- 614.7KB, ~293.3KB savings

</details>

---

#### HTTP/2 *[INFO]*

`perf/http2`

> Checks for HTTP/2 protocol support

**Solution:**

HTTP/2 enables multiplexing, header compression, and server push for faster page loads. Most modern web servers and CDNs support HTTP/2 out of the box. Requires HTTPS. Check your server/CDN documentation to enable it. HTTP/3 (QUIC) provides even better performance.

| Check | Status | Message |
|-------|--------|---------|
| http2-https-required | ! warn | HTTP/2 requires HTTPS |

<details><summary><strong>http2-https-required:</strong> 100 page(s) affected</summary>

- [/](http://localhost:3000/)
- [/about](http://localhost:3000/about)
- [/contact](http://localhost:3000/contact)
- [/category/control](http://localhost:3000/category/control)
- [/category/motion](http://localhost:3000/category/motion)
- [/category/interface](http://localhost:3000/category/interface)
- [/audit/1336](http://localhost:3000/audit/1336)
- [/audit/1394](http://localhost:3000/audit/1394)
- [/audit/1746](http://localhost:3000/audit/1746)
- [/audit/1747](http://localhost:3000/audit/1747)
- [/audit/1756](http://localhost:3000/audit/1756)
- [/audit/1771](http://localhost:3000/audit/1771)
- [/audit/1794](http://localhost:3000/audit/1794)
- [/audit/2094](http://localhost:3000/audit/2094)
- [/audit/2198](http://localhost:3000/audit/2198)
- [/audit/2500](http://localhost:3000/audit/2500)
- [/audit/3200](http://localhost:3000/audit/3200)
- [/audit/5069](http://localhost:3000/audit/5069)
- [/audit/5561](http://localhost:3000/audit/5561)
- [/audit/6000](http://localhost:3000/audit/6000)
- [/audit/6064](http://localhost:3000/audit/6064)
- [/audit/51309148](http://localhost:3000/audit/51309148)
- [/audit/1756-IA8D](http://localhost:3000/audit/1756-IA8D)
- [/audit/1756-IA16](http://localhost:3000/audit/1756-IA16)
- [/audit/1756-IA16I](http://localhost:3000/audit/1756-IA16I)
- [/audit/1756-IM16I](http://localhost:3000/audit/1756-IM16I)
- [/audit/1756-IA32](http://localhost:3000/audit/1756-IA32)
- [/audit/1756-IN16](http://localhost:3000/audit/1756-IN16)
- [/audit/1756-OA8](http://localhost:3000/audit/1756-OA8)
- [/audit/1756-OA8D](http://localhost:3000/audit/1756-OA8D)
- [/audit/1756-OA8E](http://localhost:3000/audit/1756-OA8E)
- [/audit/1756-OA16](http://localhost:3000/audit/1756-OA16)
- [/audit/1756-OA16I](http://localhost:3000/audit/1756-OA16I)
- [/audit/1756-ON8](http://localhost:3000/audit/1756-ON8)
- [/audit/1756-IB16](http://localhost:3000/audit/1756-IB16)
- [/audit/1756-IB16D](http://localhost:3000/audit/1756-IB16D)
- [/audit/1756-IB16I](http://localhost:3000/audit/1756-IB16I)
- [/audit/1756-IB16IF](http://localhost:3000/audit/1756-IB16IF)
- [/audit/1756-IB16ISOE](http://localhost:3000/audit/1756-IB16ISOE)
- [/audit/1756-IB32](http://localhost:3000/audit/1756-IB32)
- [/audit/1756-IC16](http://localhost:3000/audit/1756-IC16)
- [/audit/1756-IG16](http://localhost:3000/audit/1756-IG16)
- [/audit/1756-IH16I](http://localhost:3000/audit/1756-IH16I)
- [/audit/1756-IV16](http://localhost:3000/audit/1756-IV16)
- [/audit/1756-IV32](http://localhost:3000/audit/1756-IV32)
- [/audit/1756-OB8](http://localhost:3000/audit/1756-OB8)
- [/audit/1756-OB8EI](http://localhost:3000/audit/1756-OB8EI)
- [/audit/1756-OB8I](http://localhost:3000/audit/1756-OB8I)
- [/audit/1756-OB16D](http://localhost:3000/audit/1756-OB16D)
- [/audit/1756-OB16E](http://localhost:3000/audit/1756-OB16E)
- [/audit/1756-OB16IEF](http://localhost:3000/audit/1756-OB16IEF)
- [/audit/1756-OB16I](http://localhost:3000/audit/1756-OB16I)
- [/audit/1756-OB32](http://localhost:3000/audit/1756-OB32)
- [/audit/1756-OC8](http://localhost:3000/audit/1756-OC8)
- [/audit/1756-OG16](http://localhost:3000/audit/1756-OG16)
- [/audit/1756-OH8I](http://localhost:3000/audit/1756-OH8I)
- [/audit/1756-OV16E](http://localhost:3000/audit/1756-OV16E)
- [/audit/1756-IF8](http://localhost:3000/audit/1756-IF8)
- [/audit/1756-IF8I](http://localhost:3000/audit/1756-IF8I)
- [/audit/1756-IF16I](http://localhost:3000/audit/1756-IF16I)
- [/audit/1756-IR6I](http://localhost:3000/audit/1756-IR6I)
- [/audit/1756-IRT8I](http://localhost:3000/audit/1756-IRT8I)
- [/audit/1756-IR12](http://localhost:3000/audit/1756-IR12)
- [/audit/1756-IT6I](http://localhost:3000/audit/1756-IT6I)
- [/audit/1756-IT16](http://localhost:3000/audit/1756-IT16)
- [/audit/1756-OF4](http://localhost:3000/audit/1756-OF4)
- [/audit/1756-OF8](http://localhost:3000/audit/1756-OF8)
- [/audit/1756-OF8I](http://localhost:3000/audit/1756-OF8I)
- [/audit/1756-EWEB](http://localhost:3000/audit/1756-EWEB)
- [/audit/1756-DHRIO](http://localhost:3000/audit/1756-DHRIO)
- [/audit/1756-ENBT](http://localhost:3000/audit/1756-ENBT)
- [/audit/1756-CNB](http://localhost:3000/audit/1756-CNB)
- [/audit/1756-CNBR](http://localhost:3000/audit/1756-CNBR)
- [/audit/1756-DNB](http://localhost:3000/audit/1756-DNB)
- [/audit/1756-L61](http://localhost:3000/audit/1756-L61)
- [/audit/1756-L62](http://localhost:3000/audit/1756-L62)
- [/audit/1756-L63](http://localhost:3000/audit/1756-L63)
- [/audit/1756-L55](http://localhost:3000/audit/1756-L55)
- [/audit/1747-L531](http://localhost:3000/audit/1747-L531)
- [/audit/1746-IA8](http://localhost:3000/audit/1746-IA8)
- [/audit/1746-IN16](http://localhost:3000/audit/1746-IN16)
- [/audit/1746-IB8](http://localhost:3000/audit/1746-IB8)
- [/audit/1746-IO12DC](http://localhost:3000/audit/1746-IO12DC)
- [/audit/1746-OB8](http://localhost:3000/audit/1746-OB8)
- [/audit/1746-HSCE2](http://localhost:3000/audit/1746-HSCE2)
- [/audit/1746-BTM](http://localhost:3000/audit/1746-BTM)
- [/audit/1746-HSCE](http://localhost:3000/audit/1746-HSCE)
- [/audit/1746-HSTP1](http://localhost:3000/audit/1746-HSTP1)
- [/audit/1746-QS](http://localhost:3000/audit/1746-QS)
- [/audit/1746-QV](http://localhost:3000/audit/1746-QV)
- [/audit/1747-SCNR](http://localhost:3000/audit/1747-SCNR)
- [/audit/1747-SDN](http://localhost:3000/audit/1747-SDN)
- [/audit/1747-SN](http://localhost:3000/audit/1747-SN)
- [/audit/1746-NIO4V](http://localhost:3000/audit/1746-NIO4V)
- [/audit/1746-NIO4I](http://localhost:3000/audit/1746-NIO4I)
- [/audit/1746-NO4I](http://localhost:3000/audit/1746-NO4I)
- [/audit/1746-NO4V](http://localhost:3000/audit/1746-NO4V)
- [/audit/6ES7212-1AB23-0XB0](http://localhost:3000/audit/6ES7212-1AB23-0XB0)
- [/audit/6ES7212-1BB23-0XB0](http://localhost:3000/audit/6ES7212-1BB23-0XB0)
- [/audit/6ES7214-1AD23-0XB0](http://localhost:3000/audit/6ES7214-1AD23-0XB0)

</details>

<details><summary><strong>http2-https-required:</strong> 100 item(s)</summary>

- [HTTP/2 requires HTTPS](http://localhost:3000/)
- [HTTP/2 requires HTTPS](http://localhost:3000/about)
- [HTTP/2 requires HTTPS](http://localhost:3000/contact)
- [HTTP/2 requires HTTPS](http://localhost:3000/category/control)
- [HTTP/2 requires HTTPS](http://localhost:3000/category/motion)
- [HTTP/2 requires HTTPS](http://localhost:3000/category/interface)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1336)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1394)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1746)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1747)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1771)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1794)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/2094)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/2198)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/2500)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/3200)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/5069)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/5561)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/6000)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/6064)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/51309148)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-IA8D)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-IA16)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-IA16I)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-IM16I)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-IA32)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-IN16)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-OA8)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-OA8D)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-OA8E)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-OA16)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-OA16I)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-ON8)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-IB16)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-IB16D)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-IB16I)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-IB16IF)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-IB16ISOE)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-IB32)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-IC16)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-IG16)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-IH16I)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-IV16)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-IV32)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-OB8)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-OB8EI)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-OB8I)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-OB16D)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-OB16E)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-OB16IEF)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-OB16I)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-OB32)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-OC8)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-OG16)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-OH8I)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-OV16E)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-IF8)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-IF8I)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-IF16I)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-IR6I)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-IRT8I)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-IR12)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-IT6I)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-IT16)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-OF4)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-OF8)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-OF8I)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-EWEB)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-DHRIO)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-ENBT)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-CNB)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-CNBR)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-DNB)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-L61)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-L62)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-L63)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1756-L55)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1747-L531)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1746-IA8)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1746-IN16)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1746-IB8)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1746-IO12DC)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1746-OB8)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1746-HSCE2)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1746-BTM)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1746-HSCE)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1746-HSTP1)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1746-QS)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1746-QV)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1747-SCNR)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1747-SDN)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1747-SN)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1746-NIO4V)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1746-NIO4I)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1746-NO4I)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/1746-NO4V)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/6ES7212-1AB23-0XB0)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/6ES7212-1BB23-0XB0)
- [HTTP/2 requires HTTPS](http://localhost:3000/audit/6ES7214-1AD23-0XB0)

</details>

---

#### Source Maps *[INFO]*

`perf/source-maps`

> Checks for source map availability and configuration

**Solution:**

Source maps help debug minified code but can expose source code if publicly accessible. For production: 1) Either remove source maps entirely, 2) Restrict access via server config, or 3) Use 'hidden' source maps uploaded only to error tracking services. Exposed source maps can reveal business logic and security implementations to attackers.

| Check | Status | Message |
|-------|--------|---------|
| source-maps-exposed | ! warn | 188 potential source map(s) detected |
| source-maps-inline | ! warn | 1 inline source map(s) found |

<details><summary><strong>source-maps-exposed:</strong> 100 page(s) affected</summary>

- [/](http://localhost:3000/)
- [/about](http://localhost:3000/about)
- [/contact](http://localhost:3000/contact)
- [/category/control](http://localhost:3000/category/control)
- [/category/motion](http://localhost:3000/category/motion)
- [/category/interface](http://localhost:3000/category/interface)
- [/audit/1336](http://localhost:3000/audit/1336)
- [/audit/1394](http://localhost:3000/audit/1394)
- [/audit/1746](http://localhost:3000/audit/1746)
- [/audit/1747](http://localhost:3000/audit/1747)
- [/audit/1756](http://localhost:3000/audit/1756)
- [/audit/1771](http://localhost:3000/audit/1771)
- [/audit/1794](http://localhost:3000/audit/1794)
- [/audit/2094](http://localhost:3000/audit/2094)
- [/audit/2198](http://localhost:3000/audit/2198)
- [/audit/2500](http://localhost:3000/audit/2500)
- [/audit/3200](http://localhost:3000/audit/3200)
- [/audit/5069](http://localhost:3000/audit/5069)
- [/audit/5561](http://localhost:3000/audit/5561)
- [/audit/6000](http://localhost:3000/audit/6000)
- [/audit/6064](http://localhost:3000/audit/6064)
- [/audit/51309148](http://localhost:3000/audit/51309148)
- [/audit/1756-IA8D](http://localhost:3000/audit/1756-IA8D)
- [/audit/1756-IA16](http://localhost:3000/audit/1756-IA16)
- [/audit/1756-IA16I](http://localhost:3000/audit/1756-IA16I)
- [/audit/1756-IM16I](http://localhost:3000/audit/1756-IM16I)
- [/audit/1756-IA32](http://localhost:3000/audit/1756-IA32)
- [/audit/1756-IN16](http://localhost:3000/audit/1756-IN16)
- [/audit/1756-OA8](http://localhost:3000/audit/1756-OA8)
- [/audit/1756-OA8D](http://localhost:3000/audit/1756-OA8D)
- [/audit/1756-OA8E](http://localhost:3000/audit/1756-OA8E)
- [/audit/1756-OA16](http://localhost:3000/audit/1756-OA16)
- [/audit/1756-OA16I](http://localhost:3000/audit/1756-OA16I)
- [/audit/1756-ON8](http://localhost:3000/audit/1756-ON8)
- [/audit/1756-IB16](http://localhost:3000/audit/1756-IB16)
- [/audit/1756-IB16D](http://localhost:3000/audit/1756-IB16D)
- [/audit/1756-IB16I](http://localhost:3000/audit/1756-IB16I)
- [/audit/1756-IB16IF](http://localhost:3000/audit/1756-IB16IF)
- [/audit/1756-IB16ISOE](http://localhost:3000/audit/1756-IB16ISOE)
- [/audit/1756-IB32](http://localhost:3000/audit/1756-IB32)
- [/audit/1756-IC16](http://localhost:3000/audit/1756-IC16)
- [/audit/1756-IG16](http://localhost:3000/audit/1756-IG16)
- [/audit/1756-IH16I](http://localhost:3000/audit/1756-IH16I)
- [/audit/1756-IV16](http://localhost:3000/audit/1756-IV16)
- [/audit/1756-IV32](http://localhost:3000/audit/1756-IV32)
- [/audit/1756-OB8](http://localhost:3000/audit/1756-OB8)
- [/audit/1756-OB8EI](http://localhost:3000/audit/1756-OB8EI)
- [/audit/1756-OB8I](http://localhost:3000/audit/1756-OB8I)
- [/audit/1756-OB16D](http://localhost:3000/audit/1756-OB16D)
- [/audit/1756-OB16E](http://localhost:3000/audit/1756-OB16E)
- [/audit/1756-OB16IEF](http://localhost:3000/audit/1756-OB16IEF)
- [/audit/1756-OB16I](http://localhost:3000/audit/1756-OB16I)
- [/audit/1756-OB32](http://localhost:3000/audit/1756-OB32)
- [/audit/1756-OC8](http://localhost:3000/audit/1756-OC8)
- [/audit/1756-OG16](http://localhost:3000/audit/1756-OG16)
- [/audit/1756-OH8I](http://localhost:3000/audit/1756-OH8I)
- [/audit/1756-OV16E](http://localhost:3000/audit/1756-OV16E)
- [/audit/1756-IF8](http://localhost:3000/audit/1756-IF8)
- [/audit/1756-IF8I](http://localhost:3000/audit/1756-IF8I)
- [/audit/1756-IF16I](http://localhost:3000/audit/1756-IF16I)
- [/audit/1756-IR6I](http://localhost:3000/audit/1756-IR6I)
- [/audit/1756-IRT8I](http://localhost:3000/audit/1756-IRT8I)
- [/audit/1756-IR12](http://localhost:3000/audit/1756-IR12)
- [/audit/1756-IT6I](http://localhost:3000/audit/1756-IT6I)
- [/audit/1756-IT16](http://localhost:3000/audit/1756-IT16)
- [/audit/1756-OF4](http://localhost:3000/audit/1756-OF4)
- [/audit/1756-OF8](http://localhost:3000/audit/1756-OF8)
- [/audit/1756-OF8I](http://localhost:3000/audit/1756-OF8I)
- [/audit/1756-EWEB](http://localhost:3000/audit/1756-EWEB)
- [/audit/1756-DHRIO](http://localhost:3000/audit/1756-DHRIO)
- [/audit/1756-ENBT](http://localhost:3000/audit/1756-ENBT)
- [/audit/1756-CNB](http://localhost:3000/audit/1756-CNB)
- [/audit/1756-CNBR](http://localhost:3000/audit/1756-CNBR)
- [/audit/1756-DNB](http://localhost:3000/audit/1756-DNB)
- [/audit/1756-L61](http://localhost:3000/audit/1756-L61)
- [/audit/1756-L62](http://localhost:3000/audit/1756-L62)
- [/audit/1756-L63](http://localhost:3000/audit/1756-L63)
- [/audit/1756-L55](http://localhost:3000/audit/1756-L55)
- [/audit/1747-L531](http://localhost:3000/audit/1747-L531)
- [/audit/1746-IA8](http://localhost:3000/audit/1746-IA8)
- [/audit/1746-IN16](http://localhost:3000/audit/1746-IN16)
- [/audit/1746-IB8](http://localhost:3000/audit/1746-IB8)
- [/audit/1746-IO12DC](http://localhost:3000/audit/1746-IO12DC)
- [/audit/1746-OB8](http://localhost:3000/audit/1746-OB8)
- [/audit/1746-HSCE2](http://localhost:3000/audit/1746-HSCE2)
- [/audit/1746-BTM](http://localhost:3000/audit/1746-BTM)
- [/audit/1746-HSCE](http://localhost:3000/audit/1746-HSCE)
- [/audit/1746-HSTP1](http://localhost:3000/audit/1746-HSTP1)
- [/audit/1746-QS](http://localhost:3000/audit/1746-QS)
- [/audit/1746-QV](http://localhost:3000/audit/1746-QV)
- [/audit/1747-SCNR](http://localhost:3000/audit/1747-SCNR)
- [/audit/1747-SDN](http://localhost:3000/audit/1747-SDN)
- [/audit/1747-SN](http://localhost:3000/audit/1747-SN)
- [/audit/1746-NIO4V](http://localhost:3000/audit/1746-NIO4V)
- [/audit/1746-NIO4I](http://localhost:3000/audit/1746-NIO4I)
- [/audit/1746-NO4I](http://localhost:3000/audit/1746-NO4I)
- [/audit/1746-NO4V](http://localhost:3000/audit/1746-NO4V)
- [/audit/6ES7212-1AB23-0XB0](http://localhost:3000/audit/6ES7212-1AB23-0XB0)
- [/audit/6ES7212-1BB23-0XB0](http://localhost:3000/audit/6ES7212-1BB23-0XB0)
- [/audit/6ES7214-1AD23-0XB0](http://localhost:3000/audit/6ES7214-1AD23-0XB0)

</details>

<details><summary><strong>source-maps-exposed:</strong> 10 item(s)</summary>

- [from /_next/static/chunks/9ace1_next_dist_compiled_react-dom_1ea6f237._.js](http://localhost:3000/_next/static/chunks/9ace1_next_dist_compiled_react-dom_1ea6f237._.js.map)
- [from /_next/static/chunks/9ace1_next_dist_compiled_react-server-dom-turbopack_c24d3757._.js](http://localhost:3000/_next/static/chunks/%22)
- [from /_next/static/chunks/9ace1_next_dist_compiled_react-server-dom-turbopack_c24d3757._.js](http://localhost:3000/_next/static/chunks/9ace1_next_dist_compiled_react-server-dom-turbopack_c24d3757._.js.map)
- [from /_next/static/chunks/9ace1_next_dist_d0f8efb3._.js](http://localhost:3000/_next/static/chunks/index.js.map)
- [from /_next/static/chunks/9ace1_next_dist_compiled_next-devtools_index_71297dc5.js](http://localhost:3000/_next/static/chunks/9ace1_next_dist_compiled_next-devtools_index_71297dc5.js.map)
- [from /_next/static/chunks/9ace1_next_dist_compiled_76466ef2._.js](http://localhost:3000/_next/static/chunks/helpers.js.map)
- [from /_next/static/chunks/9ace1_next_dist_compiled_76466ef2._.js](http://localhost:3000/_next/static/chunks/runtime.js.map)
- [from /_next/static/chunks/9ace1_next_dist_compiled_76466ef2._.js](http://localhost:3000/_next/static/chunks/9ace1_next_dist_compiled_76466ef2._.js.map)
- [from /_next/static/chunks/9ace1_next_dist_client_5a3ef046._.js](http://localhost:3000/_next/static/chunks/asset-prefix.js.map)
- [from /_next/static/chunks/9ace1_next_dist_client_5a3ef046._.js](http://localhost:3000/_next/static/chunks/set-attributes-from-props.js.map)

</details>

<details><summary><strong>source-maps-inline:</strong> 100 page(s) affected</summary>

- [/](http://localhost:3000/)
- [/about](http://localhost:3000/about)
- [/contact](http://localhost:3000/contact)
- [/category/control](http://localhost:3000/category/control)
- [/category/motion](http://localhost:3000/category/motion)
- [/category/interface](http://localhost:3000/category/interface)
- [/audit/1336](http://localhost:3000/audit/1336)
- [/audit/1394](http://localhost:3000/audit/1394)
- [/audit/1746](http://localhost:3000/audit/1746)
- [/audit/1747](http://localhost:3000/audit/1747)
- [/audit/1756](http://localhost:3000/audit/1756)
- [/audit/1771](http://localhost:3000/audit/1771)
- [/audit/1794](http://localhost:3000/audit/1794)
- [/audit/2094](http://localhost:3000/audit/2094)
- [/audit/2198](http://localhost:3000/audit/2198)
- [/audit/2500](http://localhost:3000/audit/2500)
- [/audit/3200](http://localhost:3000/audit/3200)
- [/audit/5069](http://localhost:3000/audit/5069)
- [/audit/5561](http://localhost:3000/audit/5561)
- [/audit/6000](http://localhost:3000/audit/6000)
- [/audit/6064](http://localhost:3000/audit/6064)
- [/audit/51309148](http://localhost:3000/audit/51309148)
- [/audit/1756-IA8D](http://localhost:3000/audit/1756-IA8D)
- [/audit/1756-IA16](http://localhost:3000/audit/1756-IA16)
- [/audit/1756-IA16I](http://localhost:3000/audit/1756-IA16I)
- [/audit/1756-IM16I](http://localhost:3000/audit/1756-IM16I)
- [/audit/1756-IA32](http://localhost:3000/audit/1756-IA32)
- [/audit/1756-IN16](http://localhost:3000/audit/1756-IN16)
- [/audit/1756-OA8](http://localhost:3000/audit/1756-OA8)
- [/audit/1756-OA8D](http://localhost:3000/audit/1756-OA8D)
- [/audit/1756-OA8E](http://localhost:3000/audit/1756-OA8E)
- [/audit/1756-OA16](http://localhost:3000/audit/1756-OA16)
- [/audit/1756-OA16I](http://localhost:3000/audit/1756-OA16I)
- [/audit/1756-ON8](http://localhost:3000/audit/1756-ON8)
- [/audit/1756-IB16](http://localhost:3000/audit/1756-IB16)
- [/audit/1756-IB16D](http://localhost:3000/audit/1756-IB16D)
- [/audit/1756-IB16I](http://localhost:3000/audit/1756-IB16I)
- [/audit/1756-IB16IF](http://localhost:3000/audit/1756-IB16IF)
- [/audit/1756-IB16ISOE](http://localhost:3000/audit/1756-IB16ISOE)
- [/audit/1756-IB32](http://localhost:3000/audit/1756-IB32)
- [/audit/1756-IC16](http://localhost:3000/audit/1756-IC16)
- [/audit/1756-IG16](http://localhost:3000/audit/1756-IG16)
- [/audit/1756-IH16I](http://localhost:3000/audit/1756-IH16I)
- [/audit/1756-IV16](http://localhost:3000/audit/1756-IV16)
- [/audit/1756-IV32](http://localhost:3000/audit/1756-IV32)
- [/audit/1756-OB8](http://localhost:3000/audit/1756-OB8)
- [/audit/1756-OB8EI](http://localhost:3000/audit/1756-OB8EI)
- [/audit/1756-OB8I](http://localhost:3000/audit/1756-OB8I)
- [/audit/1756-OB16D](http://localhost:3000/audit/1756-OB16D)
- [/audit/1756-OB16E](http://localhost:3000/audit/1756-OB16E)
- [/audit/1756-OB16IEF](http://localhost:3000/audit/1756-OB16IEF)
- [/audit/1756-OB16I](http://localhost:3000/audit/1756-OB16I)
- [/audit/1756-OB32](http://localhost:3000/audit/1756-OB32)
- [/audit/1756-OC8](http://localhost:3000/audit/1756-OC8)
- [/audit/1756-OG16](http://localhost:3000/audit/1756-OG16)
- [/audit/1756-OH8I](http://localhost:3000/audit/1756-OH8I)
- [/audit/1756-OV16E](http://localhost:3000/audit/1756-OV16E)
- [/audit/1756-IF8](http://localhost:3000/audit/1756-IF8)
- [/audit/1756-IF8I](http://localhost:3000/audit/1756-IF8I)
- [/audit/1756-IF16I](http://localhost:3000/audit/1756-IF16I)
- [/audit/1756-IR6I](http://localhost:3000/audit/1756-IR6I)
- [/audit/1756-IRT8I](http://localhost:3000/audit/1756-IRT8I)
- [/audit/1756-IR12](http://localhost:3000/audit/1756-IR12)
- [/audit/1756-IT6I](http://localhost:3000/audit/1756-IT6I)
- [/audit/1756-IT16](http://localhost:3000/audit/1756-IT16)
- [/audit/1756-OF4](http://localhost:3000/audit/1756-OF4)
- [/audit/1756-OF8](http://localhost:3000/audit/1756-OF8)
- [/audit/1756-OF8I](http://localhost:3000/audit/1756-OF8I)
- [/audit/1756-EWEB](http://localhost:3000/audit/1756-EWEB)
- [/audit/1756-DHRIO](http://localhost:3000/audit/1756-DHRIO)
- [/audit/1756-ENBT](http://localhost:3000/audit/1756-ENBT)
- [/audit/1756-CNB](http://localhost:3000/audit/1756-CNB)
- [/audit/1756-CNBR](http://localhost:3000/audit/1756-CNBR)
- [/audit/1756-DNB](http://localhost:3000/audit/1756-DNB)
- [/audit/1756-L61](http://localhost:3000/audit/1756-L61)
- [/audit/1756-L62](http://localhost:3000/audit/1756-L62)
- [/audit/1756-L63](http://localhost:3000/audit/1756-L63)
- [/audit/1756-L55](http://localhost:3000/audit/1756-L55)
- [/audit/1747-L531](http://localhost:3000/audit/1747-L531)
- [/audit/1746-IA8](http://localhost:3000/audit/1746-IA8)
- [/audit/1746-IN16](http://localhost:3000/audit/1746-IN16)
- [/audit/1746-IB8](http://localhost:3000/audit/1746-IB8)
- [/audit/1746-IO12DC](http://localhost:3000/audit/1746-IO12DC)
- [/audit/1746-OB8](http://localhost:3000/audit/1746-OB8)
- [/audit/1746-HSCE2](http://localhost:3000/audit/1746-HSCE2)
- [/audit/1746-BTM](http://localhost:3000/audit/1746-BTM)
- [/audit/1746-HSCE](http://localhost:3000/audit/1746-HSCE)
- [/audit/1746-HSTP1](http://localhost:3000/audit/1746-HSTP1)
- [/audit/1746-QS](http://localhost:3000/audit/1746-QS)
- [/audit/1746-QV](http://localhost:3000/audit/1746-QV)
- [/audit/1747-SCNR](http://localhost:3000/audit/1747-SCNR)
- [/audit/1747-SDN](http://localhost:3000/audit/1747-SDN)
- [/audit/1747-SN](http://localhost:3000/audit/1747-SN)
- [/audit/1746-NIO4V](http://localhost:3000/audit/1746-NIO4V)
- [/audit/1746-NIO4I](http://localhost:3000/audit/1746-NIO4I)
- [/audit/1746-NO4I](http://localhost:3000/audit/1746-NO4I)
- [/audit/1746-NO4V](http://localhost:3000/audit/1746-NO4V)
- [/audit/6ES7212-1AB23-0XB0](http://localhost:3000/audit/6ES7212-1AB23-0XB0)
- [/audit/6ES7212-1BB23-0XB0](http://localhost:3000/audit/6ES7212-1BB23-0XB0)
- [/audit/6ES7214-1AD23-0XB0](http://localhost:3000/audit/6ES7214-1AD23-0XB0)

</details>

<details><summary><strong>source-maps-inline:</strong> 1 item(s)</summary>

- [/_next/static/chunks/turbopack-niches_pseo-net_7b506983._.js](/_next/static/chunks/turbopack-niches_pseo-net_7b506983._.js)

</details>

---

### Social Media

*0 error(s), 2 warning(s)*

#### OG URL Match **[WARN]**

`social/og-url-match`

> Checks that og:url matches canonical URL

**Solution:**

og:url should match your canonical URL. Mismatches can cause social share stats to be fragmented across different URLs. Use the same URL normalization (https, www, trailing slash) as your canonical tag. Facebook uses og:url for share counting and deduplication.

| Check | Status | Message |
|-------|--------|---------|
| og-url-match | ! warn | og:url does not match canonical URL |

<details><summary><strong>og-url-match:</strong> 2 page(s) affected</summary>

- [/about](http://localhost:3000/about)
- [/contact](http://localhost:3000/contact)

</details>

---

### Accessibility

*4 error(s), 102 warning(s)*

#### Form Labels **[ERROR]**

`a11y/form-labels`

> Checks that form inputs have associated labels

**Solution:**

Every form input needs an accessible label for screen readers. Options: 1) Use <label for='inputId'>Label</label> with matching id. 2) Wrap the input inside <label>Label <input></label>. 3) Use aria-label or aria-labelledby for inputs where visible labels aren't feasible. Placeholders are not sufficient substitutes for labels. Hidden inputs, submit buttons, and image buttons don't need labels.

| Check | Status | Message |
|-------|--------|---------|
| form-labels | X fail | 1 form input(s) without labels |

<details><summary><strong>form-labels:</strong> 4 page(s) affected</summary>

- [/](http://localhost:3000/)
- [/category/control](http://localhost:3000/category/control)
- [/category/motion](http://localhost:3000/category/motion)
- [/category/interface](http://localhost:3000/category/interface)

</details>

<details><summary><strong>form-labels:</strong> 1 item(s)</summary>

- text

</details>

---

#### Color Contrast **[WARN]**

`a11y/color-contrast`

> Checks for color contrast issues in styles and classes

**Solution:**

Text must have sufficient contrast with its background for readability. WCAG AA requires 4.5:1 for normal text and 3:1 for large text (18px+ or 14px+ bold). Use tools like WebAIM Contrast Checker to verify. Common issues: light gray text, text over images without overlay. Don't rely on color alone to convey information - add icons or text labels.

| Check | Status | Message |
|-------|--------|---------|
| color-contrast | ! warn | N potential color contrast issue(s) |

<details><summary><strong>color-contrast:</strong> 100 page(s) affected</summary>

- [/](http://localhost:3000/)
- [/about](http://localhost:3000/about)
- [/contact](http://localhost:3000/contact)
- [/category/control](http://localhost:3000/category/control)
- [/category/motion](http://localhost:3000/category/motion)
- [/category/interface](http://localhost:3000/category/interface)
- [/audit/1336](http://localhost:3000/audit/1336)
- [/audit/1394](http://localhost:3000/audit/1394)
- [/audit/1746](http://localhost:3000/audit/1746)
- [/audit/1747](http://localhost:3000/audit/1747)
- [/audit/1756](http://localhost:3000/audit/1756)
- [/audit/1771](http://localhost:3000/audit/1771)
- [/audit/1794](http://localhost:3000/audit/1794)
- [/audit/2094](http://localhost:3000/audit/2094)
- [/audit/2198](http://localhost:3000/audit/2198)
- [/audit/2500](http://localhost:3000/audit/2500)
- [/audit/3200](http://localhost:3000/audit/3200)
- [/audit/5069](http://localhost:3000/audit/5069)
- [/audit/5561](http://localhost:3000/audit/5561)
- [/audit/6000](http://localhost:3000/audit/6000)
- [/audit/6064](http://localhost:3000/audit/6064)
- [/audit/51309148](http://localhost:3000/audit/51309148)
- [/audit/1756-IA8D](http://localhost:3000/audit/1756-IA8D)
- [/audit/1756-IA16](http://localhost:3000/audit/1756-IA16)
- [/audit/1756-IA16I](http://localhost:3000/audit/1756-IA16I)
- [/audit/1756-IM16I](http://localhost:3000/audit/1756-IM16I)
- [/audit/1756-IA32](http://localhost:3000/audit/1756-IA32)
- [/audit/1756-IN16](http://localhost:3000/audit/1756-IN16)
- [/audit/1756-OA8](http://localhost:3000/audit/1756-OA8)
- [/audit/1756-OA8D](http://localhost:3000/audit/1756-OA8D)
- [/audit/1756-OA8E](http://localhost:3000/audit/1756-OA8E)
- [/audit/1756-OA16](http://localhost:3000/audit/1756-OA16)
- [/audit/1756-OA16I](http://localhost:3000/audit/1756-OA16I)
- [/audit/1756-ON8](http://localhost:3000/audit/1756-ON8)
- [/audit/1756-IB16](http://localhost:3000/audit/1756-IB16)
- [/audit/1756-IB16D](http://localhost:3000/audit/1756-IB16D)
- [/audit/1756-IB16I](http://localhost:3000/audit/1756-IB16I)
- [/audit/1756-IB16IF](http://localhost:3000/audit/1756-IB16IF)
- [/audit/1756-IB16ISOE](http://localhost:3000/audit/1756-IB16ISOE)
- [/audit/1756-IB32](http://localhost:3000/audit/1756-IB32)
- [/audit/1756-IC16](http://localhost:3000/audit/1756-IC16)
- [/audit/1756-IG16](http://localhost:3000/audit/1756-IG16)
- [/audit/1756-IH16I](http://localhost:3000/audit/1756-IH16I)
- [/audit/1756-IV16](http://localhost:3000/audit/1756-IV16)
- [/audit/1756-IV32](http://localhost:3000/audit/1756-IV32)
- [/audit/1756-OB8](http://localhost:3000/audit/1756-OB8)
- [/audit/1756-OB8EI](http://localhost:3000/audit/1756-OB8EI)
- [/audit/1756-OB8I](http://localhost:3000/audit/1756-OB8I)
- [/audit/1756-OB16D](http://localhost:3000/audit/1756-OB16D)
- [/audit/1756-OB16E](http://localhost:3000/audit/1756-OB16E)
- [/audit/1756-OB16IEF](http://localhost:3000/audit/1756-OB16IEF)
- [/audit/1756-OB16I](http://localhost:3000/audit/1756-OB16I)
- [/audit/1756-OB32](http://localhost:3000/audit/1756-OB32)
- [/audit/1756-OC8](http://localhost:3000/audit/1756-OC8)
- [/audit/1756-OG16](http://localhost:3000/audit/1756-OG16)
- [/audit/1756-OH8I](http://localhost:3000/audit/1756-OH8I)
- [/audit/1756-OV16E](http://localhost:3000/audit/1756-OV16E)
- [/audit/1756-IF8](http://localhost:3000/audit/1756-IF8)
- [/audit/1756-IF8I](http://localhost:3000/audit/1756-IF8I)
- [/audit/1756-IF16I](http://localhost:3000/audit/1756-IF16I)
- [/audit/1756-IR6I](http://localhost:3000/audit/1756-IR6I)
- [/audit/1756-IRT8I](http://localhost:3000/audit/1756-IRT8I)
- [/audit/1756-IR12](http://localhost:3000/audit/1756-IR12)
- [/audit/1756-IT6I](http://localhost:3000/audit/1756-IT6I)
- [/audit/1756-IT16](http://localhost:3000/audit/1756-IT16)
- [/audit/1756-OF4](http://localhost:3000/audit/1756-OF4)
- [/audit/1756-OF8](http://localhost:3000/audit/1756-OF8)
- [/audit/1756-OF8I](http://localhost:3000/audit/1756-OF8I)
- [/audit/1756-EWEB](http://localhost:3000/audit/1756-EWEB)
- [/audit/1756-DHRIO](http://localhost:3000/audit/1756-DHRIO)
- [/audit/1756-ENBT](http://localhost:3000/audit/1756-ENBT)
- [/audit/1756-CNB](http://localhost:3000/audit/1756-CNB)
- [/audit/1756-CNBR](http://localhost:3000/audit/1756-CNBR)
- [/audit/1756-DNB](http://localhost:3000/audit/1756-DNB)
- [/audit/1756-L61](http://localhost:3000/audit/1756-L61)
- [/audit/1756-L62](http://localhost:3000/audit/1756-L62)
- [/audit/1756-L63](http://localhost:3000/audit/1756-L63)
- [/audit/1756-L55](http://localhost:3000/audit/1756-L55)
- [/audit/1747-L531](http://localhost:3000/audit/1747-L531)
- [/audit/1746-IA8](http://localhost:3000/audit/1746-IA8)
- [/audit/1746-IN16](http://localhost:3000/audit/1746-IN16)
- [/audit/1746-IB8](http://localhost:3000/audit/1746-IB8)
- [/audit/1746-IO12DC](http://localhost:3000/audit/1746-IO12DC)
- [/audit/1746-OB8](http://localhost:3000/audit/1746-OB8)
- [/audit/1746-HSCE2](http://localhost:3000/audit/1746-HSCE2)
- [/audit/1746-BTM](http://localhost:3000/audit/1746-BTM)
- [/audit/1746-HSCE](http://localhost:3000/audit/1746-HSCE)
- [/audit/1746-HSTP1](http://localhost:3000/audit/1746-HSTP1)
- [/audit/1746-QS](http://localhost:3000/audit/1746-QS)
- [/audit/1746-QV](http://localhost:3000/audit/1746-QV)
- [/audit/1747-SCNR](http://localhost:3000/audit/1747-SCNR)
- [/audit/1747-SDN](http://localhost:3000/audit/1747-SDN)
- [/audit/1747-SN](http://localhost:3000/audit/1747-SN)
- [/audit/1746-NIO4V](http://localhost:3000/audit/1746-NIO4V)
- [/audit/1746-NIO4I](http://localhost:3000/audit/1746-NIO4I)
- [/audit/1746-NO4I](http://localhost:3000/audit/1746-NO4I)
- [/audit/1746-NO4V](http://localhost:3000/audit/1746-NO4V)
- [/audit/6ES7212-1AB23-0XB0](http://localhost:3000/audit/6ES7212-1AB23-0XB0)
- [/audit/6ES7212-1BB23-0XB0](http://localhost:3000/audit/6ES7212-1BB23-0XB0)
- [/audit/6ES7214-1AD23-0XB0](http://localhost:3000/audit/6ES7214-1AD23-0XB0)

</details>

<details><summary><strong>color-contrast:</strong> 40 item(s)</summary>

- span with class "font-mono text-[9px] uppercase..." may have low contrast
- svg with class "lucide lucide-globe w-3.5 h-3...." may have low contrast
- span with class "font-mono text-[10px] tracking..." may have low contrast
- p with class "font-mono text-muted text-[13p..." may have low contrast
- span with class "font-mono text-[10px] font-bla..." may have low contrast
- div with class "p-2 border border-border/30 te..." may have low contrast
- span with class "font-display text-[11px] font-..." may have low contrast
- span with class "font-mono text-[8px] uppercase..." may have low contrast
- p with class "font-mono text-[9px] text-mute..." may have low contrast
- span with class "font-mono text-[10px] font-bol..." may have low contrast
- a with class "text-xs font-mono text-muted-f..." may have low contrast
- p with class "text-xl text-neutral-400 max-w..." may have low contrast
- p with class "text-neutral-400 leading-relax..." may have low contrast
- p with class "text-neutral-400 font-mono tex..." may have low contrast
- h4 with class "text-[10px] font-mono tracking..." may have low contrast
- p with class "font-mono text-[10px] text-mut..." may have low contrast
- a with class "font-mono text-[10px] text-mut..." may have low contrast
- div with class "font-mono text-[9px] text-mute..." may have low contrast
- div with class "flex gap-8 font-mono text-[9px..." may have low contrast
- White text (verify background): 1 instance(s)
- p with class "text-lg text-neutral-400 mb-12..." may have low contrast
- Very light text color: 1 instance(s)
- div with class "flex items-center gap-2 font-m..." may have low contrast
- p with class "font-mono text-muted text-sm m..." may have low contrast
- p with class "font-mono text-[11px] text-mut..." may have low contrast
- span with class "font-mono text-[10px] text-mut..." may have low contrast
- span with class "font-mono text-[9px] text-mute..." may have low contrast
- svg with class "lucide lucide-search absolute ..." may have low contrast
- input with class "w-full bg-panel/20 border bord..." may have low contrast
- div with class "hidden md:grid grid-cols-12 ga..." may have low contrast
- span with class "md:hidden font-mono text-[10px..." may have low contrast
- div with class "col-span-4 font-display font-s..." may have low contrast
- nav with class "w-full flex items-center gap-2..." may have low contrast
- div with class "flex flex-wrap items-center ga..." may have low contrast
- p with class "font-display font-semibold tex..." may have low contrast
- span with class "font-mono text-sm font-bold up..." may have low contrast
- p with class "text-sm leading-relaxed text-m..." may have low contrast
- li with class "flex gap-3 text-xs font-mono u..." may have low contrast
- span with class "font-mono text-[10px] uppercas..." may have low contrast
- p with class "text-xs font-mono uppercase te..." may have low contrast

</details>

---

#### Heading Order **[WARN]**

`a11y/heading-order`

> Checks that heading levels don't skip

**Solution:**

Headings should follow a logical hierarchy without skipping levels. Screen reader users navigate by headings, so skipping from H1 to H3 is confusing. Correct order: H1 -> H2 -> H3 (not H1 -> H3). You can have multiple headings at the same level, and you can go back up (H3 -> H2 is fine). Think of headings as an outline - they should make sense when read alone.

| Check | Status | Message |
|-------|--------|---------|
| heading-order | ! warn | N heading level skip(s) detected |

<details><summary><strong>heading-order:</strong> 2 page(s) affected</summary>

- [/](http://localhost:3000/)
- [/about](http://localhost:3000/about)

</details>

<details><summary><strong>heading-order:</strong> 2 item(s)</summary>

- H3 after H1
- H4 after H2

</details>

---

### URL Structure

*0 error(s), 94 warning(s)*

#### URL Lowercase **[WARN]**

`url/lowercase`

> Checks that URLs are lowercase

**Solution:**

URLs should be lowercase to prevent duplicate content issues. Most servers treat /Page and /page as different URLs, creating duplicates. Always use lowercase URLs and redirect uppercase variants. Configure your server or CMS to auto-lowercase URLs. This also improves URL consistency and readability.

| Check | Status | Message |
|-------|--------|---------|
| url-lowercase | ! warn | URL contains uppercase characters |

<details><summary><strong>url-lowercase:</strong> 78 page(s) affected</summary>

- [/audit/1756-IA8D](http://localhost:3000/audit/1756-IA8D)
- [/audit/1756-IA16](http://localhost:3000/audit/1756-IA16)
- [/audit/1756-IA16I](http://localhost:3000/audit/1756-IA16I)
- [/audit/1756-IM16I](http://localhost:3000/audit/1756-IM16I)
- [/audit/1756-IA32](http://localhost:3000/audit/1756-IA32)
- [/audit/1756-IN16](http://localhost:3000/audit/1756-IN16)
- [/audit/1756-OA8](http://localhost:3000/audit/1756-OA8)
- [/audit/1756-OA8D](http://localhost:3000/audit/1756-OA8D)
- [/audit/1756-OA8E](http://localhost:3000/audit/1756-OA8E)
- [/audit/1756-OA16](http://localhost:3000/audit/1756-OA16)
- [/audit/1756-OA16I](http://localhost:3000/audit/1756-OA16I)
- [/audit/1756-ON8](http://localhost:3000/audit/1756-ON8)
- [/audit/1756-IB16](http://localhost:3000/audit/1756-IB16)
- [/audit/1756-IB16D](http://localhost:3000/audit/1756-IB16D)
- [/audit/1756-IB16I](http://localhost:3000/audit/1756-IB16I)
- [/audit/1756-IB16IF](http://localhost:3000/audit/1756-IB16IF)
- [/audit/1756-IB16ISOE](http://localhost:3000/audit/1756-IB16ISOE)
- [/audit/1756-IB32](http://localhost:3000/audit/1756-IB32)
- [/audit/1756-IC16](http://localhost:3000/audit/1756-IC16)
- [/audit/1756-IG16](http://localhost:3000/audit/1756-IG16)
- [/audit/1756-IH16I](http://localhost:3000/audit/1756-IH16I)
- [/audit/1756-IV16](http://localhost:3000/audit/1756-IV16)
- [/audit/1756-IV32](http://localhost:3000/audit/1756-IV32)
- [/audit/1756-OB8](http://localhost:3000/audit/1756-OB8)
- [/audit/1756-OB8EI](http://localhost:3000/audit/1756-OB8EI)
- [/audit/1756-OB8I](http://localhost:3000/audit/1756-OB8I)
- [/audit/1756-OB16D](http://localhost:3000/audit/1756-OB16D)
- [/audit/1756-OB16E](http://localhost:3000/audit/1756-OB16E)
- [/audit/1756-OB16IEF](http://localhost:3000/audit/1756-OB16IEF)
- [/audit/1756-OB16I](http://localhost:3000/audit/1756-OB16I)
- [/audit/1756-OB32](http://localhost:3000/audit/1756-OB32)
- [/audit/1756-OC8](http://localhost:3000/audit/1756-OC8)
- [/audit/1756-OG16](http://localhost:3000/audit/1756-OG16)
- [/audit/1756-OH8I](http://localhost:3000/audit/1756-OH8I)
- [/audit/1756-OV16E](http://localhost:3000/audit/1756-OV16E)
- [/audit/1756-IF8](http://localhost:3000/audit/1756-IF8)
- [/audit/1756-IF8I](http://localhost:3000/audit/1756-IF8I)
- [/audit/1756-IF16I](http://localhost:3000/audit/1756-IF16I)
- [/audit/1756-IR6I](http://localhost:3000/audit/1756-IR6I)
- [/audit/1756-IRT8I](http://localhost:3000/audit/1756-IRT8I)
- [/audit/1756-IR12](http://localhost:3000/audit/1756-IR12)
- [/audit/1756-IT6I](http://localhost:3000/audit/1756-IT6I)
- [/audit/1756-IT16](http://localhost:3000/audit/1756-IT16)
- [/audit/1756-OF4](http://localhost:3000/audit/1756-OF4)
- [/audit/1756-OF8](http://localhost:3000/audit/1756-OF8)
- [/audit/1756-OF8I](http://localhost:3000/audit/1756-OF8I)
- [/audit/1756-EWEB](http://localhost:3000/audit/1756-EWEB)
- [/audit/1756-DHRIO](http://localhost:3000/audit/1756-DHRIO)
- [/audit/1756-ENBT](http://localhost:3000/audit/1756-ENBT)
- [/audit/1756-CNB](http://localhost:3000/audit/1756-CNB)
- [/audit/1756-CNBR](http://localhost:3000/audit/1756-CNBR)
- [/audit/1756-DNB](http://localhost:3000/audit/1756-DNB)
- [/audit/1756-L61](http://localhost:3000/audit/1756-L61)
- [/audit/1756-L62](http://localhost:3000/audit/1756-L62)
- [/audit/1756-L63](http://localhost:3000/audit/1756-L63)
- [/audit/1756-L55](http://localhost:3000/audit/1756-L55)
- [/audit/1747-L531](http://localhost:3000/audit/1747-L531)
- [/audit/1746-IA8](http://localhost:3000/audit/1746-IA8)
- [/audit/1746-IN16](http://localhost:3000/audit/1746-IN16)
- [/audit/1746-IB8](http://localhost:3000/audit/1746-IB8)
- [/audit/1746-IO12DC](http://localhost:3000/audit/1746-IO12DC)
- [/audit/1746-OB8](http://localhost:3000/audit/1746-OB8)
- [/audit/1746-HSCE2](http://localhost:3000/audit/1746-HSCE2)
- [/audit/1746-BTM](http://localhost:3000/audit/1746-BTM)
- [/audit/1746-HSCE](http://localhost:3000/audit/1746-HSCE)
- [/audit/1746-HSTP1](http://localhost:3000/audit/1746-HSTP1)
- [/audit/1746-QS](http://localhost:3000/audit/1746-QS)
- [/audit/1746-QV](http://localhost:3000/audit/1746-QV)
- [/audit/1747-SCNR](http://localhost:3000/audit/1747-SCNR)
- [/audit/1747-SDN](http://localhost:3000/audit/1747-SDN)
- [/audit/1747-SN](http://localhost:3000/audit/1747-SN)
- [/audit/1746-NIO4V](http://localhost:3000/audit/1746-NIO4V)
- [/audit/1746-NIO4I](http://localhost:3000/audit/1746-NIO4I)
- [/audit/1746-NO4I](http://localhost:3000/audit/1746-NO4I)
- [/audit/1746-NO4V](http://localhost:3000/audit/1746-NO4V)
- [/audit/6ES7212-1AB23-0XB0](http://localhost:3000/audit/6ES7212-1AB23-0XB0)
- [/audit/6ES7212-1BB23-0XB0](http://localhost:3000/audit/6ES7212-1BB23-0XB0)
- [/audit/6ES7214-1AD23-0XB0](http://localhost:3000/audit/6ES7214-1AD23-0XB0)

</details>

---

#### Slug Keywords *[INFO]*

`url/slug-keywords`

> Checks if URL slug contains relevant keywords

**Solution:**

URLs should contain keywords that describe the page content. Good: /blue-running-shoes. Bad: /product-12345 or /p?id=abc. Include primary keywords in the URL path, but avoid keyword stuffing. URLs should be readable by humans and give users an idea of page content before clicking. Dynamic parameters don't provide SEO value.

| Check | Status | Message |
|-------|--------|---------|
| slug-keywords | ! warn | URL uses numeric/hash ID instead of descriptive slug |

<details><summary><strong>slug-keywords:</strong> 16 page(s) affected</summary>

- [/audit/1336](http://localhost:3000/audit/1336)
- [/audit/1394](http://localhost:3000/audit/1394)
- [/audit/1746](http://localhost:3000/audit/1746)
- [/audit/1747](http://localhost:3000/audit/1747)
- [/audit/1756](http://localhost:3000/audit/1756)
- [/audit/1771](http://localhost:3000/audit/1771)
- [/audit/1794](http://localhost:3000/audit/1794)
- [/audit/2094](http://localhost:3000/audit/2094)
- [/audit/2198](http://localhost:3000/audit/2198)
- [/audit/2500](http://localhost:3000/audit/2500)
- [/audit/3200](http://localhost:3000/audit/3200)
- [/audit/5069](http://localhost:3000/audit/5069)
- [/audit/5561](http://localhost:3000/audit/5561)
- [/audit/6000](http://localhost:3000/audit/6000)
- [/audit/6064](http://localhost:3000/audit/6064)
- [/audit/51309148](http://localhost:3000/audit/51309148)

</details>

---

### E-E-A-T

*0 error(s), 1 warning(s)*

#### Privacy Policy **[WARN]**

`eeat/privacy-policy`

> Checks for privacy policy page linked from footer

**Solution:**

A privacy policy is required by law in many jurisdictions (GDPR, CCPA) and signals trustworthiness. Link it from your footer on every page. Cover: what data you collect, how you use it, third-party sharing, user rights, and contact for privacy concerns. Keep it updated when practices change.

| Check | Status | Message |
|-------|--------|---------|
| privacy-policy | ! warn | No Privacy Policy page found |

---

---

*Generated by [squirrelscan](https://squirrelscan.com) v0.0.38*