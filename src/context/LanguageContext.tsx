import { createContext, useContext, useState, PropsWithChildren } from "react";

export type Language = "en" | "jp";

export const translations = {
    en: {
        // Navbar
        navAbout: "ABOUT",
        navWork: "WORK",
        navContact: "CONTACT",
        // Landing
        hello: "Hello! I'm",
        landingRole1: "A Full Stack",
        landingDesc1: "Developer",
        landingDesc2: "Engineer",
        // About
        aboutTitle: "About Me",
        aboutText:
            "Motivated and detail-oriented Information Science & Engineering undergraduate with strong foundational knowledge in software development, artificial intelligence, and full stack web technologies. Experienced in building responsive applications, utilizing cloud platforms, and collaborating in team environments. Passionate about solving real-world problems and continuously learning emerging technologies.",
        // Career
        careerTitle: "My career",
        careerAnd: "&",
        careerExp: "experience",
        internTitle1: "Full Stack Developer Intern",
        internComp1: "Octanet Services",
        internDesc1:
            "Developed and maintained responsive web applications using HTML, CSS, JavaScript, and Node.js. Collaborated on version control and project workflows using Git and GitHub. Actively participated in sprint meetings, requirement gathering, and agile development practices.",
        internTitle2: "Student Intern / Trainee",
        internComp2: "DRDO – Gas Turbine Research Establishment",
        internDesc2:
            "Working on research-oriented engineering and software-related tasks under DRDO scientists and technical staff. Gaining hands-on exposure to defense-grade systems, project documentation, and real-world problem-solving while adhering to strict confidentiality and organizational protocols.",
        // WhatIDo
        frontendTitle: "FRONTEND",
        frontendSub: "Building Interactive UIs",
        frontendDesc:
            "Crafting performant, responsive web applications with modern frameworks. Passionate about pixel-perfect, accessible interfaces.",
        skillset: "Skillset & tools",
        backendTitle: "BACKEND & AI",
        backendSub: "Scalable APIs & Machine Learning",
        backendDesc:
            "Building robust APIs and intelligent systems. From full stack web apps to ML-powered tools, I create solutions that scale.",
        // Work
        workTitle: "My Work",
        toolsLabel: "Tools & Features",
        // Contact
        contactTitle: "Contact",
        emailLabel: "Email",
        educationLabel: "Education",
        educationVal: "B.E. in Information Science & Engineering – CGPA 7.52",
        socialLabel: "Social",
        footerCredit: "Designed and Developed",
        footerBy: "by",
        resume: "RESUME",
    },
    jp: {
        // Navbar
        navAbout: "自己紹介",
        navWork: "作品",
        navContact: "連絡先",
        // Landing
        hello: "はじめまして！私は",
        landingRole1: "フルスタック",
        landingDesc1: "デベロッパー",
        landingDesc2: "エンジニア",
        // About
        aboutTitle: "自己紹介",
        aboutText:
            "ソフトウェア開発、人工知能、フルスタックWeb技術に強い基礎知識を持つ情報科学・工学専攻の学生です。レスポンシブアプリの開発、クラウドプラットフォームの活用、チームとのコラボレーション経験があります。現実の問題を解決し、新しい技術を継続的に学ぶことに情熱を持っています。",
        // Career
        careerTitle: "キャリアと",
        careerAnd: "",
        careerExp: "経験",
        internTitle1: "フルスタック開発インターン",
        internComp1: "Octanet Services",
        internDesc1:
            "HTML、CSS、JavaScript、Node.jsを使用したレスポンシブWebアプリの開発・保守を担当。GitとGitHubを用いたバージョン管理とプロジェクト管理に協力。スプリントミーティング、要件収集、アジャイル開発に積極的に参加。",
        internTitle2: "学生インターン・研修生",
        internComp2: "DRDO – ガスタービン研究機関（GTRE）",
        internDesc2:
            "DRDO科学者・技術スタッフのもと、研究志向の工学・ソフトウェア業務に従事。防衛グレードシステム、プロジェクト文書、現実の問題解決に関するハンズオン経験を積む。機密保持と組織プロトコルを厳守しながら学習中。",
        // WhatIDo
        frontendTitle: "フロントエンド",
        frontendSub: "インタラクティブなUIを構築",
        frontendDesc:
            "モダンフレームワークを使用して、パフォーマンスの高い、レスポンシブなWebアプリを開発。ピクセル精度のアクセシブルなUIに情熱をもって取り組みます。",
        skillset: "スキルセットとツール",
        backendTitle: "バックエンド & AI",
        backendSub: "スケーラブルなAPIと機械学習",
        backendDesc:
            "堅牢なAPIとインテリジェントなシステムを構築。フルスタックWebアプリからMLツールまで、スケールするソリューションを提供します。",
        // Work
        workTitle: "作品集",
        toolsLabel: "ツール & 機能",
        // Contact
        contactTitle: "連絡先",
        emailLabel: "メール",
        educationLabel: "学歴",
        educationVal: "情報科学・工学 学士（B.E.）– CGPA 7.52",
        socialLabel: "ソーシャル",
        footerCredit: "設計・開発",
        footerBy: "by",
        resume: "履歴書",
    },
};

type TranslationKey = keyof typeof translations.en;
type LanguageContextType = {
    lang: Language;
    t: (key: TranslationKey) => string;
    toggle: () => void;
};

const LanguageContext = createContext<LanguageContextType>({
    lang: "en",
    t: (key) => translations.en[key],
    toggle: () => { },
});

export const LanguageProvider = ({ children }: PropsWithChildren) => {
    const [lang, setLang] = useState<Language>("en");
    const toggle = () => setLang((l) => (l === "en" ? "jp" : "en"));
    const t = (key: TranslationKey) => translations[lang][key];
    return (
        <LanguageContext.Provider value={{ lang, t, toggle }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
