"use client";
import PageContainer from "../components/PageContainer";
import Link from "next/link";
import ArrowLeftIcon from "../components/icons/ArrowLeftIcon";
import { getAllProjects } from "../../../functions/getAllProjects";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
  source: string;
  tags: string[];
}

// ProjectCard component'i
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      className="bg-white/95 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20 backdrop-blur-sm flex flex-col h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.03, y: -5 }}
    >
      {/* Resim Alanı - Sabit yükseklik */}
      {project.image?.url ? (
        <div className="h-48 overflow-hidden relative flex-shrink-0">
          <motion.img
            src={project.image.url}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      ) : (
        <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center flex-shrink-0">
          <div className="text-center text-gray-500">
            <div className="text-4xl mb-2">📷</div>
            <div className="text-sm">No Image</div>
          </div>
        </div>
      )}

      {/* Proje İçeriği - Flex-grow ile esnek alan */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Başlık - Sabit yükseklik */}
        <div className="mb-3 min-h-[60px] flex items-start">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-2 leading-tight">
            {project.title}
          </h3>
        </div>

        {/* Açıklama - Sabit yükseklik */}
        <div className="mb-4 flex-grow min-h-[80px]">
          <p className="text-gray-600 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Teknoloji Tag'leri - Maksimum yükseklik */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4 min-h-[40px]">
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tagIndex}
                className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 rounded-full border border-purple-200"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        )}

        {/* Butonlar - Sabit konum */}
        <div className="mt-auto pt-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Source Linki */}
            {project.source && (
              <motion.a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-center py-3 px-4 rounded-lg transition-all duration-300 text-sm font-bold shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                👀 Projeyi Görüntüle
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Ana component
export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fetchedProjects = await getAllProjects();
        setProjects(Array.isArray(fetchedProjects) ? fetchedProjects : []);
      } catch (error) {
        console.error("Projeler yüklenirken hata:", error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <PageContainer title={"Portfolio/Projects"} description={"My Projects"}>
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800"></div>
        <div className="min-h-screen relative z-10 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4 text-white">⏳</div>
            <p className="text-white text-lg">Projeler yükleniyor...</p>
          </div>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer title={"Portfolio/Projects"} description={"My Projects"}>
      {/* Lacivert-mor arka plan - ANA SAYFAYLA AYNI */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800"></div>

      {/* Sayfa içeriği */}
      <div className="min-h-screen relative z-10">
        <section className="h-full max-w-5xl pt-4 mx-auto mb-16 md:pt-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="flex items-center space-x-4 font-semibold pb-6 text-white hover:text-pink-300 transition-all duration-300 group"
            >
              <motion.div whileHover={{ x: -5 }} transition={{ duration: 0.3 }}>
                <ArrowLeftIcon className="w-8 h-8 fill-current" />
              </motion.div>
              <span className="group-hover:text-pink-300">Back to Home</span>
            </Link>

            <motion.h1
              className="text-4xl font-bold text-white mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            ></motion.h1>
            <motion.p
              className="text-xl text-purple-200 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Geliştirdiğim projeleri keşfedin 🚀
            </motion.p>
          </motion.div>

          {/* Projeler Grid */}
          <motion.div
            className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {/* Boş Proje Durumu */}
          {projects.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-8xl mb-6 text-white">😕</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Henüz proje bulunmuyor
              </h3>
              <p className="text-purple-200 text-lg">
                Yakında harika projelerle burada olacağım!
              </p>
            </motion.div>
          )}
        </section>
      </div>
    </PageContainer>
  );
}
