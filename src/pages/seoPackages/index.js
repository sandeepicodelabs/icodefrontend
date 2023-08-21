import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../seo.scss";
import Popup from "../../components/Popup/Modal";

export default function Seo() {
  useEffect(() => {
    typeof window != "undefined" && window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Popup />
      <section className="service-hero-section">
        <div className="contentWidth">
          <div className="service-hero-content ">
            <h1>Affordable seo plans for all size business!</h1>
            <p>Minimum seo contract period: month to month</p>
          </div>
        </div>
      </section>

      <section className="seoPlanSec">
        <div className="contentWidth">
          <h1>SEO Packages</h1>
          <div className="secoTable">
            <table>
              <thead>
                <tr>
                  <th>Packages Price</th>
                  <th>Essential USD 299/m</th>
                  <th>Advanced USD 699/m</th>
                  <th>Millennial USD 1399/m</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Pages Managed</strong>
                  </td>
                  <td>Upto 10 pages</td>
                  <td>Upto 25 pages</td>
                  <td>Upto 50 pages</td>
                </tr>
                <tr>
                  <td>
                    <strong>Final Keywords</strong>
                  </td>
                  <td>10 to 20 Keywords</td>
                  <td>21 to 50 keywords</td>
                  <td>50 to 100 keywords</td>
                </tr>
                <tr>
                  <td className="sectionHeading" colSpan={4}>
                    <h2>One-time tasks as On-page Optimization</h2>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>SEO Strategy and Plan</strong>
                  </td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Keywords Analysis Report</strong>
                  </td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Competitor Analysis Report</strong>
                  </td>
                  <td>____</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Title Tag optimization</strong>
                  </td>
                  <td>Up to 15 pages</td>
                  <td>Up to 25 pages</td>
                  <td>Up to 50 pages</td>
                </tr>
                <tr>
                  <td>
                    <strong>Google Search Console Setup</strong>
                  </td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Google Analytics Setup & Analysis</strong>
                  </td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Cross Browser Compatibility Check</strong>
                  </td>
                  <td>____</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Competitor Backlink Analysis</strong>
                  </td>
                  <td>____</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Duplicate Content Checking</strong>
                  </td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Broken Links Check</strong>
                  </td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Resolve Canonical Error</strong>
                  </td>
                  <td>____</td>
                  <td>____</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Onsite blog optimization</strong>
                  </td>
                  <td>____</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>W3c Validation</strong>
                  </td>
                  <td>____</td>
                  <td>&nbsp;</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Website Load Time Checking</strong>
                  </td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Website Speed Check</strong>
                  </td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Meta Tag optimization</strong>
                  </td>
                  <td>Up to 15 pages</td>
                  <td>Up to 25 pages</td>
                  <td>Up to 50 pages</td>
                </tr>
                <tr>
                  <td>
                    <strong>URL Mapping and Rewriting</strong>
                  </td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Existing content optimization</strong>
                  </td>
                  <td>____</td>
                  <td>Upto 10 pages</td>
                  <td>Upto 15 pages</td>
                </tr>
                <tr>
                  <td>
                    <strong>Robots.txt Optimization</strong>
                  </td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Check website structure</strong>
                  </td>
                  <td>____</td>
                  <td>Upto 10 pages</td>
                  <td>Upto 15 pages</td>
                </tr>
                <tr>
                  <td>
                    <strong>Heading Tag optimization</strong>
                  </td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Image Optimization</strong>
                  </td>
                  <td>Up to 15 pages</td>
                  <td>Up to 25 pages</td>
                  <td>Up to 50 pages</td>
                </tr>
                <tr>
                  <td>
                    <strong>Schema Codes</strong>
                  </td>
                  <td>____</td>
                  <td>Upto 10 pages</td>
                  <td>Upto 15 pages</td>
                </tr>
                <tr>
                  <td>
                    <strong>XML Sitemap Creation</strong>
                  </td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Internal Linking Optimization</strong>
                  </td>
                  <td>Up to 15 pages</td>
                  <td>Up to 25 pages</td>
                  <td>Up to 50 pages</td>
                </tr>
                <tr>
                  <td>
                    <strong>404 error correction</strong>
                  </td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td className="sectionHeading" colSpan={4}>
                    <h2>Off-page optimization & link building</h2>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Number of Monthly Links</strong>
                  </td>
                  <td>80 - 100 links</td>
                  <td>140 to 180 links</td>
                  <td>200 to 250 links</td>
                </tr>
                <tr>
                  <td>
                    <strong>Social Bookmarking Submission</strong>
                  </td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Blog Comment</strong>
                  </td>
                  <td>____</td>
                  <td>Upto 10 pages</td>
                  <td>Upto 15 pages</td>
                </tr>
                <tr>
                  <td>
                    <strong>Slide Submissions</strong>
                  </td>
                  <td>____</td>
                  <td>____</td>
                  <td>Upto 15 pages</td>
                </tr>
                <tr>
                  <td>
                    <strong>Image Sharing</strong>
                  </td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Document sharing</strong>
                  </td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Local Listing submission</strong>
                  </td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Press Release Submission</strong>
                  </td>
                  <td>____</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Classified Submission</strong>
                  </td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Video Creation and Sharing</strong>
                  </td>
                  <td>YES (only sharing)</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Link Building on Competitors backlinks</strong>
                  </td>
                  <td>____</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Content Marketing</strong>
                  </td>
                  <td>YES </td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Guest Blog posting</strong>
                  </td>
                  <td>____</td>
                  <td>1 per month (from 2nd month onwards)</td>
                  <td>2 per month (from 2nd month onwards)</td>
                </tr>
                <tr>
                  <td>
                    <strong>Infographic creation & promotion</strong>
                  </td>
                  <td>YES </td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Reddit comments</strong>
                  </td>
                  <td>YES </td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Search engine submissions</strong>
                  </td>
                  <td>YES </td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Web 2.0 Blogs submissions</strong>
                  </td>
                  <td>1 per month </td>
                  <td>2 per month</td>
                  <td>3 per month</td>
                </tr>
                <tr>
                  <td>
                    <strong>Video Promotions</strong>
                  </td>
                  <td>YES </td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Blog Submission</strong>
                  </td>
                  <td>YES </td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Social Media Post Sharing</strong>
                  </td>
                  <td>____</td>
                  <td>____</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Quora Question and Answer</strong>
                  </td>
                  <td>____</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Article submission</strong>
                  </td>
                  <td>YES </td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td className="sectionHeading" colSpan={4}>
                    <h2>Monthly Content Creation</h2>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Web 2.0 Blog content (500 words)</strong>
                  </td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>
                    <strong>Website Blog post (600 to 1200 words)</strong>
                  </td>
                  <td>1</td>
                  <td>2</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>
                    <strong>Guest Blog Content (1000 to 2000 words)</strong>
                  </td>
                  <td>____</td>
                  <td>1 (from 2nd month)</td>
                  <td>2 (from 2nd month)</td>
                </tr>
                <tr>
                  <td className="sectionHeading" colSpan={4}>
                    <h2>Website Optimization for Local Search</h2>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Local Search Engine Submissions</strong>
                  </td>
                  <td>____</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Google My Business Listing</strong>
                  </td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Bing Business Listing</strong>
                  </td>
                  <td>&nbsp;</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td className="sectionHeading" colSpan={4}>
                    <h2>Social Media Optimization</h2>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Facebook</strong>
                  </td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Twitter</strong>
                  </td>
                  <td>____</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Instagram</strong>
                  </td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Pinterest</strong>
                  </td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td className="sectionHeading" colSpan={4}>
                    <h2>Analysis Report</h2>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Report Frequency</strong>
                  </td>
                  <td>Monthly</td>
                  <td>Mid of the Month</td>
                  <td>Weekly</td>
                </tr>
                <tr>
                  <td>
                    <strong>SEO Ranking Reports</strong>
                  </td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Report of On-Page SEO</strong>
                  </td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Google Webmaster Report & Analysis</strong>
                  </td>
                  <td>____</td>
                  <td>____</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>Google Analytical Report and Analysis</strong>
                  </td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>
                    <strong>E-mail/Call/Skype Support</strong>
                  </td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
