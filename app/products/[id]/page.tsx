
export default function page() {
  return (
    <div>page</div>
  )
}



// import { notFound } from 'next/navigation'
// import Link from 'next/link'
// import { projects } from '@/data/products'
// import { ArrowLeft, ExternalLink, Github, CheckCircle, Calendar, User, Clock, Tag } from 'lucide-react'

// interface Props {
//   params: Promise<{ id: string }>
// }


// // Generate static params for all project IDs
// export function generateStaticParams() {
//   return projects.map((p) => ({ id: p.id }))
// }

// // Generate metadata dynamically
// export async function generateMetadata({ params }: Props) {
//     const { id } = await params   
//   const project = projects.find((p) => p.id === id)

//   if (!project) return { title: 'Project Not Found' }
//   return {
//     title: `${project.title} – EasySoft`,
//     description: project.description,
//   }
// }

// export default async function ProjectDetailPage({ params }: Props) {
//   const { id } = await params   
//   const project = projects.find((p) => p.id === id)

//   if (!project) notFound()

//   const related = projects.filter((p) => p.id !== project.id && p.category === project.category).slice(0, 2)

//   return (
//     <div className="bg-[#f2f2f2] dark:bg-[#0c2501] pt-16">
//       {/* Hero */}
//       <section className="py-20 bg-[#0c2501] relative overflow-hidden">
//         <div
//           className="absolute inset-0 opacity-20"
//           style={{
//             backgroundImage:
//               'linear-gradient(rgba(74,222,128,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.08) 1px, transparent 1px)',
//             backgroundSize: '40px 40px',
//           }}
//         />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//           <Link
//             href="/projects"
//             className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#81fa00]  mb-8 transition-colors"
//           >
//             <ArrowLeft size={14} /> Back to Projects
//           </Link>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#81fa00]/70 /15 text-[#81fa00]  border border-[#81fA00]/25 mb-5">
//                 {project.category}
//               </span>
//               <h1 className="text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">{project.title}</h1>
//               <p className="text-gray-400 text-lg leading-relaxed mb-8">{project.longDescription}</p>

//               <div className="flex flex-wrap gap-3">
//                 <a
//                   href={project.liveUrl}
//                   className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#81fa00]/70  hover:bg-[#81fa00]  text-black font-semibold text-sm rounded-full transition-all shadow-lg shadow-[#81fa00]/70 /25"
//                 >
//                   <ExternalLink size={15} /> Live Demo
//                 </a>
//                 <a
//                   href={project.githubUrl}
//                   className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/15 text-gray-300 hover:border-white/30 hover:text-white font-semibold text-sm rounded-full transition-all"
//                 >
//                   <Github size={15} /> View Code
//                 </a>
//               </div>
//             </div>

//             {/* Project image */}
//             <div className="rounded-2xl overflow-hidden border border-[#81fA00]/15 shadow-2xl shadow-[#81fa00]/70 /10">
//               <img src={project.image} alt={project.title} className="w-full h-72 object-cover" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Details */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
//             {/* Main content */}
//             <div className="lg:col-span-2">
//               {/* Tech stack */}
//               <div className="mb-10">
//                 <h2 className="text-2xl font-black text-[#131313] dark:text-white mb-5 flex items-center gap-2">
//                   <Tag size={20} className="text-[#81fa00]  " /> Tech Stack
//                 </h2>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="px-4 py-2 rounded-xl text-sm font-medium bg-gray-100 dark:bg-[#0F2318] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-[#81fA00]/15 hover:border-[#81fA00]/30 transition-colors"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Results */}
//               <div>
//                 <h2 className="text-2xl font-black text-[#131313] dark:text-white mb-5">Key Results</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                   {project.results.map((result, i) => (
//                     <div
//                       key={i}
//                       className="bg-gray-50 dark:bg-[#0F2318] rounded-2xl p-5 border border-gray-200 dark:border-[#81fA00]/10 hover:border-[#81fA00]/30 transition-all"
//                     >
//                       <CheckCircle size={20} className="text-[#81fa00]   mb-3" />
//                       <p className="text-sm font-semibold text-gray-800 dark:text-white">{result}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Sidebar info */}
//             <div>
//               <div className="bg-gray-50 dark:bg-[#0F2318] rounded-2xl p-6 border border-gray-200 dark:border-[#81fA00]/10 sticky top-24">
//                 <h3 className="font-bold text-[#131313] dark:text-white mb-5">Project Details</h3>
//                 <div className="flex flex-col gap-4">
//                   {[
//                     { icon: User, label: 'Client', value: project.client },
//                     { icon: Calendar, label: 'Year', value: project.year },
//                     { icon: Clock, label: 'Duration', value: project.duration },
//                     { icon: Tag, label: 'Category', value: project.category },
//                   ].map(({ icon: Icon, label, value }) => (
//                     <div key={label} className="flex items-center gap-3">
//                       <div className="w-9 h-9 rounded-xl bg-[#81fa00]/70 /10 border border-[#81fA00]/20 flex items-center justify-center flex-shrink-0">
//                         <Icon size={15} className="text-[#81fa00]  " />
//                       </div>
//                       <div>
//                         <p className="text-xs text-gray-500">{label}</p>
//                         <p className="text-sm font-semibold text-[#131313] dark:text-white">{value}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="mt-6 pt-5 border-t border-gray-200 dark:border-[#81fA00]/10">
//                   <Link
//                     href="/contact"
//                     className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#81fa00]/70  hover:bg-[#81fa00]  text-black font-semibold text-sm rounded-full transition-all"
//                   >
//                     Start Similar Project
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Related projects */}
//       {related.length > 0 && (
//         <section className="py-16 bg-gray-50 dark:bg-[#0F2318]">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <h2 className="text-2xl font-black text-[#131313] dark:text-white mb-8">Related Projects</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {related.map((p) => (
//                 <Link
//                   key={p.id}
//                   href={`/projects/${p.id}`}
//                   className="group flex gap-4 bg-[#f2f2f2] dark:bg-[#0c2501] rounded-2xl p-4 border border-gray-200 dark:border-[#81fA00]/10 hover:border-[#81fA00]/30 transition-all"
//                 >
//                   <img src={p.image} alt={p.title} className="w-20 h-16 object-cover rounded-xl flex-shrink-0" />
//                   <div>
//                     <span className="text-xs text-[#81fa00]   font-semibold">{p.category}</span>
//                     <h3 className="font-bold text-[#131313] dark:text-white text-sm group-hover:text-[#81fa00]   transition-colors">
//                       {p.title}
//                     </h3>
//                     <p className="text-xs text-gray-500 mt-1 line-clamp-2">{p.description}</p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}
//     </div>
//   )
// }
