import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Star, TrendingUp, Smartphone, Clock, Award } from "lucide-react";

import heroImg from "@/assets/nfc-plate.png";
import cafeImg from "@/assets/cafe-lifestyle.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-display font-bold text-2xl tracking-tighter text-secondary">
            Reviews<span className="text-primary">Boost</span>
          </div>
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Pedir a minha placa
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-foreground font-medium text-sm mb-6">
              <Star className="w-4 h-4 fill-primary text-primary" />
              O segredo dos negócios locais em Portugal
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-6 text-secondary">
              Transforme clientes satisfeitos em avaliações no Google.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-8">
              Basta encostar o telemóvel. Sem links complicados, sem pedir por favor. 
              Aumente a sua visibilidade, atraia mais clientes e esmague a concorrência com a nossa placa NFC inteligente.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-8 font-bold" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                Ver Planos
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8 font-semibold border-secondary text-secondary hover:bg-secondary/5" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
                Como funciona?
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-[2rem] blur-3xl transform -rotate-6"></div>
            <img src={heroImg} alt="Placa NFC Google Reviews" className="relative rounded-[2rem] shadow-2xl border border-border object-cover w-full aspect-square md:aspect-[4/3]" />
          </motion.div>
        </div>
      </section>

      {/* Social Proof / Ideal Clients */}
      <section className="py-12 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-medium text-secondary-foreground/60 uppercase tracking-widest mb-8">A solução perfeita para</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-display text-lg md:text-2xl opacity-80">
            <span>Restaurantes</span>
            <span className="text-primary">•</span>
            <span>Clínicas</span>
            <span className="text-primary">•</span>
            <span>Ginásios</span>
            <span className="text-primary">•</span>
            <span>Barbearias</span>
            <span className="text-primary">•</span>
            <span>Salões de beleza</span>
            <span className="text-primary">•</span>
            <span>Imobiliárias</span>
            <span className="text-primary">•</span>
            <span>Hotéis</span>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-6">Três segundos. É tudo o que precisa.</h2>
            <p className="text-lg text-muted-foreground">O processo mais rápido e livre de atritos para captar avaliações reais de clientes reais.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "O cliente encosta o telemóvel", desc: "Ou lê o QR Code na placa colocada no seu balcão ou mesa.", icon: <Smartphone className="w-8 h-8 text-primary" /> },
              { step: "02", title: "Redirecionamento imediato", desc: "O telemóvel abre automaticamente a sua página de avaliação do Google.", icon: <TrendingUp className="w-8 h-8 text-primary" /> },
              { step: "03", title: "Avaliação em segundos", desc: "O cliente deixa as 5 estrelas e um comentário antes mesmo de sair da loja.", icon: <Star className="w-8 h-8 text-primary" /> }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="bg-card p-8 rounded-2xl border border-border shadow-sm relative overflow-hidden"
              >
                <div className="text-6xl font-display font-black text-muted/50 absolute top-4 right-4">{item.step}</div>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold font-display text-secondary mb-3 relative z-10">{item.title}</h3>
                <p className="text-muted-foreground relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem / Benefit */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={cafeImg} alt="Café em Portugal" className="rounded-2xl shadow-xl object-cover aspect-[4/5] w-full" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-6">Porque é que o seu negócio precisa disto ontem.</h2>
            <p className="text-lg text-muted-foreground mb-8">
              A maioria dos clientes satisfeitos não deixa avaliações simplesmente porque se esquece ou porque o processo dá trabalho. Com a nossa tecnologia NFC, removemos todas as barreiras.
            </p>
            <ul className="space-y-4">
              {[
                "Mais visibilidade na pesquisa local do Google",
                "Maior confiança para novos clientes",
                "Destaque absoluto face à concorrência",
                "Processo sem atrito: não precisa de pedir"
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 text-lg font-medium text-secondary">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Investimento com retorno imediato.</h2>
            <p className="text-lg text-secondary-foreground/70">Escolha o plano ideal para a velocidade de crescimento que pretende.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Plano Básico */}
            <div className="bg-card text-card-foreground p-8 rounded-2xl border border-border/10 flex flex-col">
              <h3 className="text-xl font-bold font-display mb-2">Plano Básico</h3>
              <div className="mb-6">
                <span className="text-4xl font-black">€39</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-primary shrink-0"/> Placa NFC personalizada</li>
                <li className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-primary shrink-0"/> QR Code incluído</li>
                <li className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-primary shrink-0"/> Entrega grátis</li>
              </ul>
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Quero o Básico
              </Button>
            </div>

            {/* Plano Premium */}
            <div className="bg-card text-card-foreground p-8 rounded-2xl border border-border/10 flex flex-col relative transform md:-translate-y-4 shadow-xl">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Mais Popular
              </div>
              <h3 className="text-xl font-bold font-display mb-2">Plano Premium</h3>
              <div className="mb-6">
                <span className="text-4xl font-black">€79</span>
                <span className="text-muted-foreground text-sm"> a €149</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-primary shrink-0"/> Placa NFC + QR Code</li>
                <li className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-primary shrink-0"/> Design 100% personalizado</li>
                <li className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-primary shrink-0"/> Gestão de reputação online</li>
              </ul>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Quero o Premium
              </Button>
            </div>

            {/* Plano Mensal */}
            <div className="bg-card text-card-foreground p-8 rounded-2xl border border-border/10 flex flex-col">
              <h3 className="text-xl font-bold font-display mb-2">Plano Mensal</h3>
              <div className="mb-6">
                <span className="text-4xl font-black">€29</span>
                <span className="text-muted-foreground text-sm"> /mês</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-primary shrink-0"/> Resposta às avaliações</li>
                <li className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-primary shrink-0"/> Relatórios mensais de performance</li>
                <li className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-primary shrink-0"/> Estratégia para aumentar reviews</li>
              </ul>
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Subscrever Mensal
              </Button>
            </div>

            {/* Solução Completa */}
            <div className="bg-card text-card-foreground p-8 rounded-2xl border border-border/10 flex flex-col">
              <h3 className="text-xl font-bold font-display mb-2">A Solução Completa</h3>
              <div className="mb-6">
                <span className="text-4xl font-black">€100</span>
                <span className="text-muted-foreground text-sm"> a €300</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-primary shrink-0"/> Placa NFC + QR Code</li>
                <li className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-primary shrink-0"/> Cartões de balcão + Autocolantes</li>
                <li className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-primary shrink-0"/> Landing page exclusiva</li>
                <li className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-primary shrink-0"/> Gestão total de avaliações</li>
              </ul>
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Quero Tudo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Lead Form */}
      <section id="contact" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-card border border-border shadow-xl rounded-3xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">Pronto para dominar o Google?</h2>
              <p className="text-muted-foreground">Preencha o formulário abaixo. A nossa equipa entrará em contacto em menos de 24 horas.</p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Formulário submetido com sucesso! Entraremos em contacto em breve."); }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-secondary">O seu nome</label>
                  <Input placeholder="João Silva" required className="h-12 bg-muted/50 border-transparent focus:bg-background" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-secondary">Nome do Negócio</label>
                  <Input placeholder="Restaurante O Lado" required className="h-12 bg-muted/50 border-transparent focus:bg-background" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-secondary">Email</label>
                  <Input type="email" placeholder="joao@restaurante.pt" required className="h-12 bg-muted/50 border-transparent focus:bg-background" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-secondary">Telemóvel</label>
                  <Input type="tel" placeholder="912 345 678" required className="h-12 bg-muted/50 border-transparent focus:bg-background" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary">Plano de Interesse</label>
                <Select required>
                  <SelectTrigger className="h-12 bg-muted/50 border-transparent focus:bg-background">
                    <SelectValue placeholder="Selecione um plano" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basico">Plano Básico (€39)</SelectItem>
                    <SelectItem value="premium">Plano Premium (€79 - €149)</SelectItem>
                    <SelectItem value="mensal">Plano Mensal (€29 - €99/mês)</SelectItem>
                    <SelectItem value="completa">A Solução Completa (€100 - €300)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full h-14 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 mt-4">
                Solicitar Contacto Agora
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-4">
                Sem compromisso. Entraremos em contacto para afinar os detalhes.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-12 border-t border-border text-center">
        <div className="font-display font-bold text-2xl tracking-tighter text-secondary mb-4">
          Reviews<span className="text-primary">Boost</span>
        </div>
        <p className="text-muted-foreground text-sm">
          A impulsionar negócios locais em Portugal. <br />
          © {new Date().getFullYear()} Google Reviews Boost. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
