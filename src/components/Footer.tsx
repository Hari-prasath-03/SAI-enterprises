import React from "react";
import { twitter, facebook, linkedin, youtube } from "../assets";
import { contact } from "../contents";

interface NavLink {
  id: number;
  title: string;
  href: string;
}

interface NewsArticle {
  id: number;
  title: string;
  date: string;
  author: string;
  href: string;
}

const socialLinksData = [
  { id: 1, icon: twitter, href: "#twitter" },
  { id: 2, icon: facebook, href: "#facebook" },
  { id: 3, icon: linkedin, href: "#linkedin" },
  { id: 4, icon: youtube, href: "#youtube" },
];

const quickLinksData: NavLink[] = [
  { id: 10, title: "About Company", href: "#about" },
  { id: 11, title: "Our Services", href: "#services" },
  { id: 12, title: "Our Projects", href: "#projects" },
  { id: 13, title: "Pricings", href: "#pricing" },
  { id: 14, title: "Contacts", href: "#contacts" },
];

const clientSupportData: NavLink[] = [
  { id: 20, title: "Careers", href: "#careers" },
  { id: 21, title: "Our Process", href: "#process" },
  { id: 22, title: "FAQs", href: "#faqs" },
  { id: 23, title: "Clients Testimonials", href: "#testimonials" },
  { id: 24, title: "Our Blog", href: "#blog" },
];

const newsData: NewsArticle[] = [
  {
    id: 30,
    title: "Agile Construction Management Building",
    date: "20 Nov 2020",
    author: "merkulove",
    href: "#news1",
  },
  {
    id: 31,
    title: "Top Saas Construction Products Information",
    date: "29 Nov 2020",
    author: "merkulove",
    href: "#news2",
  },
];

const Footer: React.FC = () => {
  const NavLinkList: React.FC<{ title: string; links: NavLink[] }> = ({
    title,
    links,
  }) => (
    <div className="flex flex-col space-y-3">
      <h3 className="text-lg font-bold uppercase mb-4 text-white">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.href} className="text-sm opacity-80 text-white">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  const NewsItem: React.FC<{ article: NewsArticle }> = ({ article }) => (
    <a href={article.href} className="block group mb-6">
      <h4 className="text-sm font-semibold text-white">{article.title}</h4>
      <p className="text-xs mt-1 opacity-70">
        <span className="mr-2">{article.date}</span>
        <span className="inline-block mx-1">|</span>
        <span className="ml-2">by {article.author}</span>
      </p>
    </a>
  );

  return (
    <footer className="w-full">
      <div className="flex flex-col lg:flex-row min-h-[400px]">
        <div className="lg:w-1/3 p-10 md:p-16 flex flex-col items-center justify-center text-center bg-yellow *:text-white">
          <p className="text-sm tracking-widest font-semibold uppercase mb-2">
            Call Us Today
          </p>
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              {contact.phone}
            </h2>
          </div>

          <div className="flex space-x-4 mb-10">
            {socialLinksData.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full shadow-lg bg-white hover:bg-gray-100 transition-colors"
              >
                <img src={social.icon} className="size-5" alt="" />
              </a>
            ))}
          </div>

          <p className={`text-sm mt-auto px-4 opacity-80 max-w-sm`}>
            © {new Date().getFullYear()} Sai Enterprisess. All rights reserved.
          </p>
        </div>

        <div className="lg:w-2/3 p-10 md:p-16 bg-violet text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <NavLinkList title="Quick Links" links={quickLinksData} />

            <NavLinkList title="Clients Support" links={clientSupportData} />

            <div>
              <h3 className="text-lg font-bold uppercase mb-4 text-white">
                Our News
              </h3>
              <div className="space-y-4">
                {newsData.map((article) => (
                  <NewsItem key={article.id} article={article} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
