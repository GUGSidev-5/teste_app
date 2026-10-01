import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowLeft, ArrowRight, AudioLines, Bell, Bookmark, CheckCircle2,
  ChartNoAxesColumnIncreasing, CircleUserRound, Drum, Flame, Headphones, Heart,
  Home, MapPin, MessageSquare, Mic2, MoreVertical, Music2, Pause, Play,
  Search, Send, Share2, SlidersHorizontal, Sparkles, Star, Users,
  Waves, Wind,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

export const images = {
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaPiZyW68fCesw6M2oKkXs3WkDnlt__ZygTKqMblL-T-2jOjn3LtVn1ARGzvd2mmpXTbQ85kin5u_exj8wZyd3UuUC4SEH5a6h_U9FZRAI0i7Oti_fuvqXMjk9HRr6V8sO_jHMROUzLFCaaTsTjOPKYWF_9huKPm1QI8W7UcK5Fxn6r2s4IZ_tfXLVAmCTyy3Esy-21AcE9I0ePIOu_3oyT0qe_WIJcs6rj1R7WaacXtyNeitk0b_i",
  cellist: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGfdmyAXZ5Km0nFVZexP1eaOdxNkge7mX1FYhoERZfYSuf-PoV8gaHrShYjhtcZPY5UT8R0Wi93xMHg6Z4EZ7K5rNUjJIXDXZ08ELwJVAnaGKqAeponI-RW8UWLC32fO5EHsRov_r6WcuSVaKWW0PtDlvFLO9-vG2rnuhfBB7WiB0UZzCAjci8viqAPq6qIaFNCMXbM-my0Ovf7r_q8GhNCTy2usimZuKzyIp9qjFngMOd8-J7RPfP",
  trumpet: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrVTyDJgHlDFx6G4NmR2I5etJ_mbwOzezPbzxV0OZBFkNhEHIKa-PIeoB1Kd0xgRr5wuXjZzqH9MhO4VjjvNmmRZ6oUFEl7a6kl1kDA7y2OvvIVJ0sPQPlqI_7nUHXk6agISlDctG5KsEAWHtSH-GH6zubPItI59T7NUvfwcE4CJDsweDmpp-PmP9MYt9s1IqbfC8PbEtrGm6bIFL627cfA48fw1BEsxddFxmofQgVb34qwaFLvfs9",
  trumpetAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFzIUmHU5uayO2OV1np0pVjPX3Ff_1-p3hpeEl1r8vYhuYZ5WUxDrgc_Huze5MSPf9KyYmRBV9iPbdbTOPk-cvAOIEfan4ubbKEsx9oUDpDh7CqGM4WUNEMrg7aWBk3ImX4l_1K393DPVA7Isq9zNYfBE_twHaWdu8QzjByrvDuPyDxOmmFXMVWyJRXW9ueJPsXeHMHtDn-nGxVWV6FYshMTTKUPpdL20uOUoD_G1oUkjlt-Iy5wwn",
  studio: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFqbb64Q_pZCEg8eIl5irKLuTR4Bf48WiueMkQITx6WUANmPzk82FDeIdaGSl1qILaAjigXrabHob7QvCMSipV1o6lSOfv1F7oJWAQ144dr5rQAiIEUyZFEt8nVqE3NR1VqSQ--W1NnUCeHzDlud0CvWGkvvBupDOx202XAiyFqKqtZ04YirruAkBHXv8umvc8XH1Q7AQLCEZEyHByIvd8_G1V0KT39RhgSNWJoLmsE_eIKEHGtoMb",
  helena: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgaH4izHap25Uf5VaRDLZdLBe703vgfUlzGEmtnfx0zG2o-4i6xd_dnJIIjwUWZ02ZLmroOhwIzOU68jONyEtc7bYsAWQZSlGJjVjBWetnCe3VTvHDYLxe-b9dvjTS_K6Th5xqVhFySLmMl4fzYzadq9Sn0KF2Pm9fEmpbM9VMRxHWT_tZPu2dbLuYTx4HU0O1QymYN03prMghd28G5tcLdYgvmyu41MK8bOdc-yeArTWDoLACiipy",
};

function BrandMark() {
  return <span className="flex size-7 items-center justify-center rounded-full border border-primary/70 bg-secondary shadow-glow" aria-hidden="true"><span className="flex h-4 items-center gap-0.5">{[7,13,18,11,7].map((h,i)=><span key={i} className="w-0.5 rounded-full bg-primary" style={{height:h}} />)}</span></span>;
}

export function BrandHeader({ title }: { title?: string }) {
  return <header className="sticky top-0 z-40 flex h-16 items-center justify-between bg-background/90 px-4 backdrop-blur-xl">
    <div className="flex items-center gap-2">
      <BrandMark />
      <strong className="text-lg">{title ?? "Spotlight"}</strong>
    </div>
    <div className="flex items-center gap-2">
      <Button variant="ghost" className="relative p-2" aria-label="Notificações"><Bell className="size-5" /><span className="absolute right-2 top-1.5 size-2 rounded-full bg-primary" /></Button>
      <img src={images.avatar} alt="Seu perfil" className="size-9 rounded-full border border-primary/60 object-cover" />
    </div>
  </header>;
}

const nav = [
  ["/", "Início", Home], ["/categories", "Categorias", SlidersHorizontal],
  ["/discover", "Descobrir", Flame], ["/musician/helena-duarte", "Perfil", CircleUserRound],
] as const;

export function BottomNav() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return <nav className="fixed inset-x-0 bottom-0 z-50 mx-auto flex h-16 max-w-lg items-center justify-around border-t border-border bg-background/95 px-2 backdrop-blur-xl">
    {nav.map(([to, label, Icon]) => <Link key={to} to={to} className={path === to ? "nav-link text-primary" : "nav-link text-muted-foreground"}><Icon className="size-5" /><span>{label}</span></Link>)}
  </nav>;
}

export function PlayerBar() {
  const [playing, setPlaying] = useState(false);
  return <div className="fixed bottom-16 left-1/2 z-40 flex w-[calc(100%-32px)] max-w-md -translate-x-1/2 items-center gap-3 border border-border bg-elevated/95 px-3 py-2 shadow-deep backdrop-blur-xl">
    <div className="flex size-9 items-center justify-center rounded-full bg-primary/15 text-primary"><AudioLines className="size-5" /></div>
    <div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">Nocturne Impromptu</p><p className="truncate text-[11px] text-muted-foreground">Elena Rostova · <b className="text-primary">CORDAS</b></p></div>
    <Button variant="primary" className="size-11 p-0" onClick={() => setPlaying(!playing)} aria-label={playing ? "Pausar" : "Tocar"}>{playing ? <Pause className="size-5" /> : <Play className="size-5 fill-current" />}</Button>
  </div>;
}

export function AppFrame({ children, header = true, player = true }: { children: ReactNode; header?: boolean; player?: boolean }) {
  return <div className="min-h-screen bg-background text-foreground"><div className="mx-auto min-h-screen max-w-lg border-x border-border/40 bg-background">{header && <BrandHeader />}<main className="pb-36">{children}</main></div>{player && <PlayerBar />}<BottomNav /></div>;
}

function Waveform() { return <div className="flex h-7 items-end gap-1">{[10,20,13,25,16,22,8,19,25,14,8,17,22,12,7,18].map((h,i)=><span key={i} className={i<8 ? "w-1 rounded-full bg-primary" : "w-1 rounded-full bg-muted-foreground/40"} style={{height:h}} />)}</div> }

export function HomePage() {
  const [liked, setLiked] = useState(false);
  return <AppFrame><section className="px-4 pt-3">
    <p className="eyebrow"><span className="size-2 rounded-full bg-primary" /> Spotlight diário · Ao vivo</p>
    <h1 className="mt-2 text-3xl font-extrabold">Boas-vindas ao Spotlight</h1>
    <p className="mt-1 text-sm leading-6 text-muted-foreground">Descubra os talentos instrumentais e vocais em ascensão hoje.</p>
    <label className="mt-3 flex h-12 items-center gap-3 rounded-full bg-secondary px-4 text-muted-foreground"><Search className="size-5 text-primary"/><input aria-label="Buscar músicos" className="min-w-0 flex-1 bg-transparent text-sm outline-none" placeholder="Buscar vocalistas, violoncelo, trompete, cajón"/><ChartNoAxesColumnIncreasing className="size-5"/></label>
  </section>
  <section className="mt-5 overflow-hidden"><div className="section-heading px-4"><span>Especialidades</span><Link to="/categories">Ver todas</Link></div><div className="scroll-row px-4">
    <CategoryPill icon={<Mic2/>} title="Vocalistas" count="+140 artistas" tone="violet"/><CategoryPill icon={<Music2/>} title="Cordistas" count="+320 artistas" tone="amber"/><CategoryPill icon={<Wind/>} title="Sopristas" count="+95 artistas" tone="cyan"/>
  </div></section>
  <section className="px-4 pt-6"><div className="flex items-center justify-between"><h2 className="text-xl font-bold"><Star className="mr-1 inline size-5 text-primary"/> Spotlight do Dia</h2><span className="tag text-primary">Curadoria</span></div>
    <article className="mt-3 overflow-hidden rounded-[2rem] bg-elevated shadow-deep">
      <div className="relative h-52"><img src={images.cellist} alt="Helena Duarte tocando violoncelo" className="h-full w-full object-cover"/><span className="absolute left-3 top-3 rounded-full bg-primary-soft px-3 py-1 text-[10px] font-extrabold uppercase text-primary-foreground">Destaque da semana</span><Button variant="icon" aria-label="Salvar" className="absolute right-3 top-3 bg-background/70"><Bookmark className="size-5"/></Button><div className="absolute inset-x-3 bottom-3 flex items-center gap-3 bg-background/90 p-2"><Button variant="primary" className="size-10 p-0"><Play className="size-4 fill-current"/></Button><div className="flex-1"><p className="text-xs">Loop Eclético #04</p><Waveform/></div><b className="text-xs text-primary">0:15</b></div></div>
      <div className="p-4"><div className="flex items-center justify-between"><div><h3 className="text-xl font-bold">Helena Duarte</h3><p className="text-sm text-muted-foreground">Violoncelo Elétrico & Loops</p></div><span className="tag"><MapPin className="size-3"/> SP, Brasil</span></div><div className="mt-3 flex flex-wrap gap-2"><span className="tag">Indie Fusion</span><span className="tag">Pedais de Efeito</span><span className="tag text-primary">Disponível p/ Sessões</span></div><div className="mt-4 flex gap-2"><Button asChild variant="primary" className="flex-1"><Link to="/musician/helena-duarte"><CircleUserRound className="size-4"/> Ver Perfil Completo</Link></Button><Button variant="icon" onClick={() => setLiked(!liked)} aria-label="Favoritar Helena"><Heart className={liked ? "size-5 fill-primary text-primary" : "size-5"}/></Button></div></div>
    </article>
  </section>
  <section className="px-4 pt-6"><div className="section-heading"><span>Demonstrações (15s)</span><Link to="/discover">Explorar</Link></div>{[{title:"Voo do Colibri",artist:"Mateus Sax · Jazz Contemporâneo",Icon:Wind},{title:"Ritmo Ancestral",artist:"Dandara Alves · Handpan & Pandeiro",Icon:Drum},{title:"Sussurros do Crepúsculo",artist:"Clara Rossi · Neo Soul Acústico",Icon:Mic2}].map(({title,artist,Icon})=><div key={title} className="demo-row"><Button variant="icon" className="bg-primary/15 text-primary"><Play className="size-4 fill-current"/></Button><Icon className="size-5 text-accent-cyan"/><div className="min-w-0 flex-1"><b>{title}</b><p className="truncate text-xs text-muted-foreground">{artist}</p></div><span className="text-xs text-primary">0:15</span></div>)}</section>
  </AppFrame>;
}

function CategoryPill({icon,title,count,tone}:{icon:ReactNode,title:string,count:string,tone:string}) { return <div className={`category-pill ${tone}`}><span className="icon-orb">{icon}</span><span><b>{title}</b><small>{count}</small></span></div> }

const cats = [["Vocalistas","Sopranos, tenores, backing vocal, beatboxers & lírico.","1.2k",Mic2,"violet"],["Cordistas","Violão nylon, guitarra semi-acústica, fretless & cello.","1.8k",Music2,"amber"],["Sopristas","Sax tenor/alto, trompete, flauta transversal & trombone.","940",Wind,"cyan"],["Percussão","Kits híbridos, congas, cajón, berimbau & handpan.","880",Drum,"neutral"]] as const;

export function CategoriesPage() {
  const [query,setQuery]=useState("");
  return <AppFrame><section className="px-4 pt-3"><p className="eyebrow">Curadoria sonora · 2025 <span className="tag ml-auto">4.820 Músicos</span></p><h1 className="mt-2 text-3xl font-extrabold">Especialidades Musicais</h1><p className="mt-1 text-sm leading-6 text-muted-foreground">Navegue por talento técnico, timbre acústico e descubra instrumentistas únicos para sessões, turnês e parcerias.</p><label className="mt-3 flex h-11 items-center gap-3 bg-secondary px-3 text-muted-foreground"><Search className="size-5"/><input value={query} onChange={e=>setQuery(e.target.value)} aria-label="Buscar categorias" className="min-w-0 flex-1 bg-transparent text-sm outline-none" placeholder="Buscar timbre, instrumento, afinação..."/><SlidersHorizontal className="size-5 text-primary"/></label></section>
    <div className="scroll-row mt-3 px-4"><Button variant="chip">Todos <span className="opacity-60">4.8k</span></Button><Button variant="chip" className="bg-violet text-foreground">Vocalistas <span className="tag">1.2k</span></Button><Button variant="chip">Cordistas <span className="opacity-60">1.8k</span></Button><Button variant="chip">Sopristas</Button></div>
    <section className="px-4 pt-3"><div className="section-heading"><span>Critérios operacionais</span><button className="text-primary">Limpar ×</button></div><div className="flex flex-wrap gap-2"><span className="filter"><Mic2/>Disponível p/ Gravação</span><span className="filter"><Send/>Músico de Turnê</span><span className="filter"><Headphones/>Aulas Online</span><span className="filter"><Music2/>Composição</span></div><div className="mt-2 flex items-center gap-2 bg-secondary p-3 text-sm"><Music2 className="size-5 text-primary"/><span className="flex-1">Gênero Primário: <b className="text-primary">Jazz · MPB · Neo-Soul</b></span><span className="text-xs">Trocar⌄</span></div></section>
    <section className="px-4 pt-6"><div className="flex items-end justify-between"><h2 className="text-lg font-bold">Famílias Sonoras</h2><span className="eyebrow">4 Categorias Core</span></div><div className="mt-3 grid grid-cols-2 gap-2">{cats.filter(c=>c[0].toLowerCase().includes(query.toLowerCase())).map(([name,desc,count,Icon,tone])=><article key={name} className={`family-card ${tone}`}><div className="flex justify-between"><span className="icon-orb"><Icon className="size-4"/></span><span className="count">{count}</span></div><div><h3 className="text-lg font-bold">{name}</h3><p className="text-xs leading-4 text-muted-foreground">{desc}</p><button className="mt-3 text-xs font-bold text-primary">Explorar <ArrowRight className="inline size-3"/></button></div></article>)}</div></section>
    <section className="px-4 pt-7"><h2 className="text-lg font-bold">Vozes em Destaque na Semana</h2><div className="mt-3 flex gap-3 overflow-hidden"><ArtistMini name="Clara Dumont" image="https://lh3.googleusercontent.com/aida-public/AB6AXuBKDnVi8tQ51uzN8ii3vOCVHMjxmOWuaT37oRhb7nWL5CaeolKlc3LOALVSuFPBzypjepcCVgwqEPwQKZJFg89mb8rfN3vDgCNvorLwDTz6LPn_-09Wbtlic7dpeYYoTJbDbRwLH2pZulWhZXWI7eGiCsFTjvZ61ZMc_Eg1uIKyLk-ELHrEZZxCSLUTPFj2GQGjxeaOiwLSB7zT63stioX2z1xJ8jPX9aE1756YBX1dWwsJm8Xii6g4"/><ArtistMini name="Thiago Vox" image="https://lh3.googleusercontent.com/aida-public/AB6AXuA8614c_yq6_BJ-JePzP7g0VKvkrjNTLyaZcwmy-akzTWJuuegzrF6bUPV73LXoRUvc-T-0a18VPkNEaFDHl_jn0NXmctJLV0uuJEJaKUJ4fq4dZtymgm05Wv5NW7Th95_3tSD8QM1UQzBh4yanCTH8gnzXCiR5e286nZVXVxkXe7msJHszS-zC2K1LAryIwlIn3pDHmXeDO5HJ5XFVrVgjBpY58hK1cbPquqc72irxJMNOegmjxdO7"/></div></section>
  </AppFrame>;
}

function ArtistMini({name,image}:{name:string,image:string}) { return <div className="min-w-56 overflow-hidden rounded-lg bg-elevated"><img src={image} alt={name} className="h-28 w-full object-cover"/><div className="p-3"><b>{name}</b><p className="text-xs text-muted-foreground">Vocalista · 4.9 <Star className="inline size-3 fill-primary text-primary"/></p></div></div> }

export function DiscoverPage() {
  const [liked,setLiked]=useState(true); const [playing,setPlaying]=useState(false);
  return <AppFrame><section className="px-4 pt-2"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><span className="icon-orb amber"><AudioLines/></span><div><h1 className="text-lg font-bold">Radar Tape</h1><p className="eyebrow">Amostras de 15s · Direto do estúdio</p></div></div><span className="tag text-accent-cyan">Ao vivo</span></div><div className="scroll-row mt-4"><Button variant="chip" className="bg-primary text-primary-foreground">● Todos os Solos</Button><Button variant="chip">● Sopros & Metais</Button><Button variant="chip">● Cordas Acústicas</Button></div>
    <article className="relative mt-3 h-[570px] overflow-hidden rounded-[2rem] shadow-deep"><img src={images.trumpet} alt="Gabriel Ventania tocando trompete" className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-card-fade"/><div className="absolute inset-x-4 top-4 flex justify-between"><span className="tag bg-background/75 text-accent-cyan"><Wind className="size-4"/> Metais & Efeitos · Neo-Jazz</span><span className="tag bg-background/75 text-primary">0:08 / 0:15</span></div><div className="absolute right-3 top-20 flex flex-col gap-4"><Button variant="icon" onClick={()=>setLiked(!liked)} aria-label="Curtir"><Heart className={liked?"fill-primary text-primary":""}/></Button><Button variant="icon"><MessageSquare/></Button><Button variant="icon"><Share2/></Button></div><div className="absolute inset-x-4 bottom-4"><h2 className="text-xl font-bold">Gabriel Ventania <CheckCircle2 className="inline size-5 fill-primary text-primary-foreground"/></h2><p className="mt-1 text-sm text-accent-cyan"><AudioLines className="mr-1 inline size-4"/>Trompete Mute Harmon & Strymon Delay</p><p className="mt-1 truncate text-sm italic text-muted-foreground">“Improviso em Ré Menor — Take cru direto da sessão...”</p><div className="mt-4 bg-background/85 p-3"><Waveform/><div className="flex justify-between text-[10px] uppercase text-muted-foreground"><span className="text-accent-cyan">00:08</span><span>Loop tape ativo</span><span>00:15</span></div></div><div className="mt-3 flex gap-2"><Button variant="primary" className="flex-1"><Users className="size-5"/>Contratar para Gravação</Button><Button variant="icon" onClick={()=>setPlaying(!playing)}>{playing?<Pause/>:<Send/>}</Button></div></div></article>
    <section className="mt-4 bg-elevated p-4"><div className="flex items-center justify-between"><h3 className="text-lg font-bold"><SlidersHorizontal className="mr-2 inline size-5 text-primary"/>Ficha Técnica da Gravação</h3><span className="tag text-primary">96 kHz / 24-bit</span></div><div className="mt-4 grid grid-cols-2 gap-3 text-sm"><p><Mic2 className="mb-1 text-primary"/> <span className="text-muted-foreground">Microfone</span><br/><b>Royer R-121 Fita</b></p><p><ChartNoAxesColumnIncreasing className="mb-1 text-primary"/> <span className="text-muted-foreground">Tempo & Tom</span><br/><b>84 BPM · D Minor</b></p></div></section>
  </section></AppFrame>;
}

export function MusicianPage() {
  const [following,setFollowing]=useState(false); const [playing,setPlaying]=useState(true);
  return <AppFrame header={false} player={false}><div className="relative h-72"><img src={images.studio} alt="Estúdio de Helena Duarte" className="h-full w-full object-cover"/><div className="absolute inset-0 bg-profile-fade"/><div className="absolute inset-x-4 top-4 flex items-center justify-between"><Button asChild variant="ghost" className="p-2"><Link to="/"><ArrowLeft/></Link></Button><b className="mr-auto">Detalhes Do Músico</b><Button variant="ghost"><Share2/></Button><Button variant="ghost"><MoreVertical/></Button></div><img src={images.helena} alt="Helena Duarte" className="absolute -bottom-12 left-4 size-24 rounded-full border-2 border-primary object-cover shadow-glow"/></div>
    <section className="px-4 pt-16"><div className="flex justify-end"><span className="tag text-success">Disponível agora</span></div><h1 className="text-3xl font-extrabold">Helena Duarte <CheckCircle2 className="inline size-5 fill-primary text-primary-foreground"/></h1><p className="mt-1 font-semibold text-primary">Cordista · Violoncelo Elétrico & Synth Cello</p><p className="mt-2 flex items-center gap-1 text-sm text-muted-foreground"><MapPin className="size-4"/>Curitiba, PR · Sessões Remotas & Turnês</p>
    <div className="mt-4 grid grid-cols-3 bg-elevated p-4 text-center"><Stat n="18.4k" t="Ouvintes/mês"/><Stat n="42" t="Collabs Pro"/><Stat n="98% ★" t="5★ Avaliações"/></div><Button variant="primary" className="mt-5 w-full"><Users className="size-5"/>Contratar / Proposta de Sessão</Button><div className="mt-2 grid grid-cols-2 gap-2"><Button><MessageSquare className="size-4"/>Enviar Mensagem</Button><Button onClick={()=>setFollowing(!following)}><Heart className={following?"fill-primary text-primary":""}/>{following?"Seguindo":"Seguir"}</Button></div>
    <section className="mt-4 bg-elevated p-4"><div className="section-heading"><span>Sobre a músico</span><b>10 anos de palco</b></div><p className="mt-2 leading-6 text-muted-foreground">Violoncelista formada com 10 anos de experiência em palcos e estúdios. Especialista em texturas sombrias, solos melódicos e arranjos orquestrais híbridos para produções independentes.</p></section>
    <section className="mt-4"><h2 className="eyebrow"><Sparkles className="size-4 text-primary"/>Habilidades & Técnicas</h2><div className="mt-2 flex flex-wrap gap-2">{["Violoncelo 5 Cordas","Loop Station","Arranjos de Cordas","Gravação Home Studio Pro","Indie Rock","Neo-Clássico"].map(x=><span className="tag" key={x}>{x}</span>)}</div></section>
    <section className="mt-5"><div className="section-heading"><span>Showcase de Áudio</span><b>3 Demos recentes</b></div>{["Ecos da Madrugada","Tempestade Urbana","Snippet de Estúdio #4"].map((x,i)=><div className="demo-row" key={x}><Button variant="icon" onClick={()=>setPlaying(!playing)} className={i===0?"bg-primary text-primary-foreground":""}>{i===0&&playing?<Pause/>:<Play/>}</Button><div className="flex-1"><b>{x}</b><p className="text-xs text-muted-foreground">Solo de Violoncelo & Reverb Etéreo</p></div><span className="text-xs text-primary">0{i+3}:{i?12:24}</span></div>)}</section>
    </section></AppFrame>;
}

function Stat({n,t}:{n:string,t:string}) { return <div><b className="text-lg">{n}</b><p className="text-[10px] uppercase text-muted-foreground">{t}</p></div> }