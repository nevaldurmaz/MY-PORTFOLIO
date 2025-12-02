"use client";
import PageContainer from "./components/PageContainer";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
// import Typical from "react-typical";
import GithubIcon from "./components/icons/Github";
import TwitterIcon from "./components/icons/Twitter";
import LinkedinIcon from "./components/icons/Linkedin";
import Link from "next/link";

const TypingAnimation = React.memo(() => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Bilişim Sistemleri Mühendisi Adayı",
    "Ön Uç Geliştirici",
    "Mobil Uygulama Geliştirici",
    "Yazılım Eğitmeni",
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // YAZMA
          if (charIndex < currentText.length) {
            setDisplayText(currentText.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            // YAZMA TAMAMLANDI, BEKLE VE SİL
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // SİLME
          if (charIndex > 0) {
            setDisplayText(currentText.substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            // SİLME TAMAMLANDI, BİR SONRAKİ METNE GEÇ
            setIsDeleting(false);
            setCurrentIndex((currentIndex + 1) % texts.length);
            setCharIndex(0);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex, texts]);

  return <span>{displayText}</span>;
});

export default function Home() {
  const [githubHovered, setGithubHovered] = useState(false);
  const [linkedinHovered, setLinkedinHovered] = useState(false);
  const [twitterHovered, setTwitterHovered] = useState(false);

  return (
    <PageContainer title={"Portfolio"} description={"My Portfolio"}>
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800  dark:bg-gray-900"></div>

      <motion.img
        src="/images/2.svg"
        alt="kel-2"
        className="block md:block w-30 h-30 absolute top-48 right-10 z-50 cursor-grab dark:invert dark:brightness-75 dark:saturate-150"
        whileHover={{ scale: 1.2, transition: { duration: 0.4 } }}
        whileDrag={{ cursor: "grabbing", scale: 1.1 }}
        drag
        dragConstraints={{ top: -300, left: -300, right: 300, bottom: 300 }}
        dragElastic={0.2}
      />

      <motion.img
        src="/images/1.svg"
        alt="kel-1"
        className="block md:block w-28 h-28 absolute bottom-2 left-1 z-50 cursor-grab dark:invert dark:brightness-75 dark:saturate-150"
        whileHover={{ scale: 1.2, transition: { duration: 0.4 } }}
        whileDrag={{ cursor: "grabbing", scale: 1.1 }}
        drag
        dragConstraints={{ top: -300, left: -300, right: 300, bottom: 200 }}
        dragElastic={0.2}
      />

      <main className="w-full h-full relative z-20">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
          <div className="flex flex-col items-start justify-center text-center">
            <h4 className="text-lg text-white relative z-30">
              <span className="text-xl font-normal text-white">Merhaba,</span>
              ben
            </h4>

            <motion.h1
              className="mt-5 text-xl font-extrabold tracking-normal text-white uppercase md:text-4xl md:mt-3 relative z-30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Neval Durmaz
            </motion.h1>

            <br />

            <motion.div
              className="mt-5 text-2xl font-normal tracking-normal text-transparent bg-gradient-to-r from-pink-400 via-purple-300 to-blue-400 bg-clip-text md:mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <TypingAnimation />
            </motion.div>

            {/* SOSYAL MEDYA - DAHA CANLI RENKLER */}
            <div className="flex items-center mt-8 space-x-6 md:mt-4">
              {/* GITHUB */}
              <motion.a
                href="https://github.com/nevaldurmaz"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-all duration-300 text-white hover:text-pink-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <GithubIcon className={"w-8 h-8 fill-current"} />
              </motion.a>

              {/* LINKEDIN */}
              <motion.a
                href="https://www.linkedin.com/in/neval-durmaz-4297222b8/"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-all duration-300 text-white hover:text-blue-300"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkedinIcon className={"w-8 h-8 fill-current"} />
              </motion.a>

              {/* TWITTER */}
              <motion.a
                href="https://x.com/DurmazNeval"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-all duration-300 text-white hover:text-sky-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <TwitterIcon className={"w-8 h-8 fill-current"} />
              </motion.a>
            </div>
          </div>

          {/* CODE ALANI - DAHA CANLI */}
          <motion.article
            className="mt-3 md:mt-4 max-w-none relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="bg-white/95 dark:bg-gray-800/95 rounded-xl p-6 border border-white/20 dark:border-gray-600 backdrop-blur-sm shadow-2xl">
              <pre className="bg-transparent p-0 m-0">
                <code className="language-js text-gray-800 dark:text-gray-200 text-sm">
                  <div className="flex items-center py-0 my-0 space-x-4 text-gray-600 dark:text-gray-400">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">
                      // Portfolio.js
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mt-2 font-medium">
                    <span className="text-gray-500 dark:text-gray-500">//</span>{" "}
                    Bu kelebekleri sürükleyebilirsiniz, onlara gerçekten aşığım
                    🦋🦋
                  </p>

                  <div className="flex items-center space-x-4 mt-4">
                    <motion.img
                      src="/images/nev.png"
                      alt="Me"
                      className="w-15 h-15 rounded-full border-2 border-purple-400 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="">
                      <p className="text-sm text-gray-700 dark:text-gray-300 font-mono">
                        <span className="text-pink-500 dark:text-pink-400 font-bold">
                          {">"}{" "}
                        </span>
                        const techFrontend = ["React", "Next.js",
                        "JavaScript/TypeScript"];
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 font-mono mt-1">
                        <span className="text-pink-500 dark:text-pink-400 font-bold">
                          {">"}{" "}
                        </span>
                        const techMobile = ["React Native", "Expo", "iOS &
                        Android", "Firebase"];
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8 mt-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="/projects"
                        className="transition duration-300 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-semibold"
                      >
                        Projelerim
                      </Link>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a
                        href="https://www.kariyer.net/ozgecmis-duzenle?cvId=R5FGBUUhHlqRz3HXAVse4g%3D%3D%21e%21"
                        target={"_blank"}
                        rel="noopener noreferrer"
                        className="transition duration-300 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-semibold"
                      >
                        Hakkımda
                      </a>
                    </motion.div>
                  </div>
                </code>
              </pre>
            </div>
          </motion.article>
        </section>
      </main>
    </PageContainer>
  );
}
