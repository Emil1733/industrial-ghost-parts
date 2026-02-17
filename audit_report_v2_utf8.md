<?xml version="1.0" encoding="UTF-8"?>
<audit version="0.0.38">
<site url="http://localhost:3000" crawled="20" date="2026-02-15T04:43:00.540Z"/>
<score overall="38" grade="F">
 <cat name="Security" score="51"/>
 <cat name="Structured Data" score="0"/>
 <cat name="Accessibility" score="88"/>
 <cat name="Crawlability" score="78"/>
 <cat name="Performance" score="79"/>
 <cat name="Core SEO" score="77"/>
 <cat name="Content" score="68"/>
 <cat name="URL Structure" score="92"/>
 <cat name="Links" score="89"/>
 <cat name="E-E-A-T" score="100"/>
 <cat name="Internationalization" score="100"/>
 <cat name="Images" score="100"/>
 <cat name="Legal Compliance" score="100"/>
 <cat name="Mobile" score="100"/>
</score>
<summary passed="1361" warnings="350" failed="41"/>
<issues>
 <category name="Crawlability" errors="1" warnings="3">
  <rule id="crawl/robots-txt" severity="error" status="warn" docs="https://docs.squirrelscan.com/rules/crawl/robots-txt">
   No robots.txt found
  </rule>
  <rule id="crawl/sitemap-domain" severity="error" status="fail" docs="https://docs.squirrelscan.com/rules/crawl/sitemap-domain">
   616 URL(s) point to different domain(s)
   Items (5/616):
    - https://industrial-ghost-parts.pages.dev [host: industrial-ghost-parts.pages.dev]
    - https://industrial-ghost-parts.pages.dev/category/control [host: industrial-ghost-parts.pages.dev]
    - https://industrial-ghost-parts.pages.dev/category/motion [host: industrial-ghost-parts.pages.dev]
    - https://industrial-ghost-parts.pages.dev/category/interface [host: industrial-ghost-parts.pages.dev]
    - https://industrial-ghost-parts.pages.dev/audit/1336 [host: industrial-ghost-parts.pages.dev]
  </rule>
  <rule id="crawl/sitemap-coverage" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/crawl/sitemap-coverage">
   20 indexable page(s) not in sitemap (100%); 616 sitemap URL(s) were not crawled
   Items (5/636):
    - /
    - /contact
    - /about
    - /privacy
    - /audit/1756
  </rule>
 </category>
 <category name="Core SEO" errors="0" warnings="121">
  <rule id="core/meta-description" severity="error" status="warn" docs="https://docs.squirrelscan.com/rules/core/meta-description">
   Description too short
   Pages (5/20): /, /about, /contact, /privacy, /audit/1756
   Items (5/20):
    - / (Critical risk assessment and real-time inventory f (105 chars))
    - /contact (Critical risk assessment and real-time inventory f (105 chars))
    - /about (Critical risk assessment and real-time inventory f (105 chars))
    - /privacy (Critical risk assessment and real-time inventory f (105 chars))
    - /audit/1756 (Critical risk assessment and real-time inventory f (105 chars))
  </rule>
  <rule id="core/canonical" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/core/canonical">
   Missing canonical URL
   Pages (5/20): /, /about, /contact, /privacy, /audit/1756
  </rule>
  <rule id="core/og-tags" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/core/og-tags">
   Missing og:title; Missing og:description; Missing og:image - social shares will lack imagery
   Pages (5/20): /, /about, /contact, /privacy, /audit/1756
  </rule>
  <rule id="core/title-unique" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/core/title-unique">
   1 duplicate title(s) affecting 20 pages
   Items (1):
    - machine audit | industrial ghost parts (&quot;machine audit | industrial ghost parts...&quot; (20 pages)) [pageCount: 20] (from: /, /contact, /about, /privacy, /audit/1756; +15 more)
  </rule>
  <rule id="core/twitter-cards" severity="info" status="warn" docs="https://docs.squirrelscan.com/rules/core/twitter-cards">
   No Twitter card or Open Graph tags for Twitter sharing
   Pages (5/20): /, /about, /contact, /privacy, /audit/1756
  </rule>
 </category>
 <category name="Security" errors="20" warnings="4">
  <rule id="security/https" severity="error" status="fail" docs="https://docs.squirrelscan.com/rules/security/https">
   Page not served over HTTPS
   Pages (5/20): /, /about, /contact, /privacy, /audit/1756
  </rule>
  <rule id="security/csp" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/security/csp">
   No Content-Security-Policy header
  </rule>
  <rule id="security/x-frame-options" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/security/x-frame-options">
   No clickjacking protection
  </rule>
  <rule id="security/form-captcha" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/security/form-captcha">
   1 public form(s) without CAPTCHA
   Pages (2): /contact, /broker/login
   Items (1):
    - form[0]
  </rule>
 </category>
 <category name="Links" errors="0" warnings="2">
  <rule id="links/orphan-pages" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/links/orphan-pages">
   15 orphan page(s) with &lt;2 incoming links
   Items (5/15):
    - /audit/1756
    - /audit/1756-IA8D
    - /audit/1756-IA16
    - /audit/1756-IA16I
    - /audit/1756-IA32
  </rule>
  <rule id="links/weak-internal-links" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/links/weak-internal-links">
   15 page(s) have only 1 internal link
   Items (5/15):
    - /audit/1756
    - /audit/1756-IA8D
    - /audit/1756-IA16
    - /audit/1756-IA16I
    - /audit/1756-IA32
  </rule>
 </category>
 <category name="Content" errors="0" warnings="43">
  <rule id="content/duplicate-title" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/content/duplicate-title">
   1 duplicate title(s) found across 20 pages
   Items (1):
    - machine audit | industrial ghost parts (&quot;machine audit | industrial ghost parts...&quot; (20 pages)) [pageCount: 20] (from: /, /contact, /about, /privacy, /audit/1756; +15 more)
  </rule>
  <rule id="content/duplicate-description" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/content/duplicate-description">
   1 duplicate description(s) found across 20 pages
   Items (1):
    - critical risk assessment and real-time inventory for discont (&quot;critical risk assessment and real-time i...&quot; (20 pages)) [pageCount: 20] (from: /, /contact, /about, /privacy, /audit/1756; +15 more)
  </rule>
  <rule id="content/heading-hierarchy" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/content/heading-hierarchy">
   Skipped heading levels detected
   Pages (5/17): /contact, /audit/1756, /audit/1756-IA16, /audit/1756-IA16I, /audit/1756-IA32
   Items (2):
    - H1 -&gt; H4
    - H1 -&gt; H3
  </rule>
  <rule id="content/keyword-stuffing" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/content/keyword-stuffing">
   N word(s) may be overused
   Pages (4): /, /about, /contact, /privacy
   Items (5/7):
    - auditcritical (&quot;auditcritical&quot; (7.0%)) [count: 14, density: 6.965174129353234]
    - bradley (&quot;bradley&quot; (7.0%)) [count: 14, density: 6.965174129353234]
    - controllogixcontrollogixenter (&quot;controllogixcontrollogixenter&quot; (7.0%)) [count: 14, density: 6.965174129353234]
    - allen (&quot;allen&quot; (3.5%)) [count: 7, density: 3.482587064676617]
    - ghost (&quot;ghost&quot; (5.0%)) [count: 6, density: 5.042016806722689]
  </rule>
  <rule id="content/word-count" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/content/word-count">
   Thin content: N words (min N)
   Pages (5/20): /, /about, /contact, /privacy, /audit/1756
   Items (5/20):
    - / (Thin content: 180 words (min 300))
    - /contact (Thin content: 125 words (min 300))
    - /about (Thin content: 258 words (min 300))
    - /privacy (Thin content: 197 words (min 300))
    - /audit/1756 (Thin content: 171 words (min 300))
  </rule>
 </category>
 <category name="Structured Data" errors="15" warnings="0">
  <rule id="schema/json-ld-valid" severity="warning" status="fail" docs="https://docs.squirrelscan.com/rules/schema/json-ld-valid">
   Invalid JSON-LD syntax
   Pages (5/15): /audit/1756, /audit/1756-IA16, /audit/1756-IA16I, /audit/1756-IA32, /audit/1756-IA8D
   Items (2):
    - parse-0 (Validation: Product.offers.price is required)
    - Product:offers.price (Product missing offers.price) [message: Validation: Product.offers.price is required, severity: missing, path: [&quot;offers&quot;,&quot;price&quot;]]
  </rule>
 </category>
 <category name="Performance" errors="0" warnings="122">
  <rule id="perf/js-file-size" severity="error" status="warn" docs="https://docs.squirrelscan.com/rules/perf/js-file-size">
   3 JS file(s) exceed 250.0 KB
   Items (3):
    - /_next/static/chunks/9ace1_next_dist_compiled_react-dom_1ea6f237._.js [sizeBytes: 1048258, size: 1023.7 KB, status: 200, contentType: application/javascript; charset=UTF-8] (from: /, /contact, /about, /privacy, /audit/1756; +15 more)
    - /_next/static/chunks/9ace1_next_dist_compiled_next-devtools_index_71297dc5.js [sizeBytes: 816054, size: 796.9 KB, status: 200, contentType: application/javascript; charset=UTF-8] (from: /, /contact, /about, /privacy, /audit/1756; +15 more)
    - /_next/static/chunks/9ace1_next_dist_client_5a3ef046._.js [sizeBytes: 629427, size: 614.7 KB, status: 200, contentType: application/javascript; charset=UTF-8] (from: /, /contact, /about, /privacy, /audit/1756; +15 more)
  </rule>
  <rule id="perf/total-byte-weight" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/perf/total-byte-weight">
   Total tracked resources: 3221KB (heavy page)
  </rule>
  <rule id="perf/critical-request-chains" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/perf/critical-request-chains">
   2 critical request chain(s) found
   Pages (5/20): /, /about, /contact, /privacy, /audit/1756
   Items (2):
    - CSS: /_next/static/chunks/%5Broot-of-the-server%5D__c1543b58._.css
    - JS: /_next/static/chunks/9ace1_next_dist_build_polyfills_polyfill-nomodule.js
  </rule>
  <rule id="perf/duplicate-js" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/perf/duplicate-js">
   1 library(s) loaded multiple times
   Pages (5/20): /, /about, /contact, /privacy, /audit/1756
   Items (2):
    - niches (5x)
    - niches (3x)
  </rule>
  <rule id="perf/unminified-js" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/perf/unminified-js">
   8 JavaScript file(s) appear unminified
   Pages (5/20): /, /about, /contact, /privacy, /audit/1756
   Items (5):
    - 9ace1_next_dist_compiled_react-dom_1ea6f237._.js (1023.7KB, ~259.9KB savings) [reason: high newlines (1.58%), 80 comments, long function names, formatted code, excessive whitespace]
    - 9ace1_next_dist_compiled_react-server-dom-turbopack_c24d3757._.js (167.2KB, ~53.6KB savings) [reason: high newlines (1.66%), 17 comments, long function names, formatted code, excessive whitespace]
    - 9ace1_next_dist_compiled_next-devtools_index_71297dc5.js (796.9KB, ~722.7KB savings) [reason: 80 comments]
    - 9ace1_next_dist_compiled_76466ef2._.js (141.8KB, ~60.3KB savings) [reason: high newlines (2.01%), 171 comments, long function names, formatted code, excessive whitespace]
    - 9ace1_next_dist_client_5a3ef046._.js (614.7KB, ~293.3KB savings) [reason: high newlines (2.02%), 2715 comments, long variable names, long function names, formatted code, excessive whitespace]
  </rule>
  <rule id="perf/http2" severity="info" status="warn" docs="https://docs.squirrelscan.com/rules/perf/http2">
   HTTP/2 requires HTTPS
   Pages (5/20): /, /about, /contact, /privacy, /audit/1756
   Items (5/20):
    - / (HTTP/2 requires HTTPS)
    - /contact (HTTP/2 requires HTTPS)
    - /about (HTTP/2 requires HTTPS)
    - /privacy (HTTP/2 requires HTTPS)
    - /audit/1756 (HTTP/2 requires HTTPS)
  </rule>
  <rule id="perf/source-maps" severity="info" status="warn" docs="https://docs.squirrelscan.com/rules/perf/source-maps">
   188 potential source map(s) detected; 1 inline source map(s) found
   Pages (5/20): /, /about, /contact, /privacy, /audit/1756
   Items (5/11):
    - /_next/static/chunks/9ace1_next_dist_compiled_react-dom_1ea6f237._.js.map (from /_next/static/chunks/9ace1_next_dist_compiled_react-dom_1ea6f237._.js)
    - /_next/static/chunks/%22 (from /_next/static/chunks/9ace1_next_dist_compiled_react-server-dom-turbopack_c24d3757._.js)
    - /_next/static/chunks/9ace1_next_dist_compiled_react-server-dom-turbopack_c24d3757._.js.map (from /_next/static/chunks/9ace1_next_dist_compiled_react-server-dom-turbopack_c24d3757._.js)
    - /_next/static/chunks/index.js.map (from /_next/static/chunks/9ace1_next_dist_d0f8efb3._.js)
    - /_next/static/chunks/9ace1_next_dist_compiled_next-devtools_index_71297dc5.js.map (from /_next/static/chunks/9ace1_next_dist_compiled_next-devtools_index_71297dc5.js)
  </rule>
 </category>
 <category name="Accessibility" errors="5" warnings="40">
  <rule id="a11y/select-name" severity="error" status="fail" docs="https://docs.squirrelscan.com/rules/a11y/select-name">
   1 select element(s) without accessible names
   Pages (1): /contact
   Items (1):
    - select
  </rule>
  <rule id="a11y/aria-input-field-name" severity="error" status="fail" docs="https://docs.squirrelscan.com/rules/a11y/aria-input-field-name">
   1 input field(s) without accessible names
   Pages (1): /contact
   Items (1):
    - select
  </rule>
  <rule id="a11y/form-labels" severity="error" status="fail" docs="https://docs.squirrelscan.com/rules/a11y/form-labels">
   N form input(s) without labels
   Pages (3): /, /contact, /broker/login
   Items (5):
    - text
    - text
    - email
    - select
    - textarea
  </rule>
  <rule id="a11y/color-contrast" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/a11y/color-contrast">
   N potential color contrast issue(s)
   Pages (5/20): /, /about, /contact, /privacy, /audit/1756
   Items (5/34):
    - span with class &quot;font-mono text-[9px] uppercase...&quot; may have low contrast
    - svg with class &quot;lucide lucide-globe w-3.5 h-3....&quot; may have low contrast
    - span with class &quot;font-mono text-[10px] tracking...&quot; may have low contrast
    - p with class &quot;font-mono text-muted text-[13p...&quot; may have low contrast
    - span with class &quot;font-mono text-[10px] font-bla...&quot; may have low contrast
  </rule>
  <rule id="a11y/heading-order" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/a11y/heading-order">
   N heading level skip(s) detected
   Pages (5/20): /, /about, /contact, /privacy, /audit/1756
   Items (3):
    - H3 after H1
    - H4 after H1
    - H4 after H2
  </rule>
 </category>
 <category name="URL Structure" errors="0" warnings="15">
  <rule id="url/lowercase" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/url/lowercase">
   URL contains uppercase characters
   Pages (5/14): /audit/1756-IA16, /audit/1756-IA16I, /audit/1756-IA32, /audit/1756-IA8D, /audit/1756-IB16
  </rule>
  <rule id="url/slug-keywords" severity="info" status="warn" docs="https://docs.squirrelscan.com/rules/url/slug-keywords">
   URL uses numeric/hash ID instead of descriptive slug
   Pages (1): /audit/1756
  </rule>
 </category>
</issues>
</audit>


