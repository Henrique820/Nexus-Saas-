/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Zap, 
  Shield, 
  BarChart, 
  Users, 
  ArrowRight, 
  Check, 
  Menu, 
  X, 
  Github, 
  Twitter, 
  Linkedin,
  Globe,
  Cpu,
  Cloud
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
            <Zap size={24} fill="currentColor" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Nexus<span className="text-indigo-600">SaaS</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Recursos', 'Preços', 'Sobre', 'Contato'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              {item}
            </a>
          ))}
          <button className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100">
            Começar Agora
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {['Recursos', 'Preços', 'Sobre', 'Contato'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-medium text-slate-600" onClick={() => setIsOpen(false)}>
                  {item}
                </a>
              ))}
              <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold">
                Começar Agora
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="pt-40 pb-20 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold tracking-wider uppercase">
          <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse" />
          Nova Versão 2.0 Disponível
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
          Escalone sua empresa com <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Inteligência</span>
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
          A plataforma Nexus SaaS ajuda equipes a automatizar fluxos de trabalho, analisar dados em tempo real e crescer sem limites técnicos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-200">
            Teste Grátis <ArrowRight size={20} />
          </button>
          <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
            Ver Demonstração
          </button>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-400">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map(i => (
              <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-8 h-8 rounded-full border-2 border-white" alt="User" referrerPolicy="no-referrer" />
            ))}
          </div>
          <span>+10.000 empresas já confiam na Nexus</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-violet-400/20 rounded-full blur-3xl" />
        <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl border border-slate-100 relative z-10">
          <img 
            src="https://picsum.photos/seed/dashboard/1200/800" 
            className="rounded-[2rem] w-full shadow-inner" 
            alt="Dashboard Preview" 
            referrerPolicy="no-referrer"
          />
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -top-8 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
              <BarChart size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400">Crescimento</p>
              <p className="text-sm font-bold text-slate-900">+124% este mês</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    { title: 'Segurança Total', desc: 'Proteção de dados de nível bancário com criptografia de ponta a ponta.', icon: Shield, color: 'bg-blue-50 text-blue-600' },
    { title: 'Nuvem Híbrida', desc: 'Acesse seus dados de qualquer lugar do mundo com latência zero.', icon: Cloud, color: 'bg-indigo-50 text-indigo-600' },
    { title: 'IA Integrada', desc: 'Insights automáticos gerados por modelos de IA de última geração.', icon: Cpu, color: 'bg-violet-50 text-violet-600' },
    { title: 'Colaboração', desc: 'Trabalhe em equipe em tempo real com ferramentas de chat e edição.', icon: Users, color: 'bg-emerald-50 text-emerald-600' },
  ];

  return (
    <section id="recursos" className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Por que Nexus?</h2>
          <h3 className="text-4xl font-bold text-slate-900">Tudo o que você precisa para dominar o mercado</h3>
          <p className="text-slate-600">Nossa plataforma foi construída pensando na escalabilidade e na experiência do usuário final.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className={`w-14 h-14 ${f.color} rounded-2xl flex items-center justify-center mb-6`}>
                <f.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    { name: 'Starter', price: '0', features: ['Até 3 usuários', '5GB de Armazenamento', 'Suporte via Email', 'Relatórios Básicos'], popular: false },
    { name: 'Pro', price: '49', features: ['Usuários Ilimitados', '100GB de Armazenamento', 'Suporte 24/7', 'IA Avançada', 'Custom Branding'], popular: true },
    { name: 'Enterprise', price: '199', features: ['Tudo do Pro', 'Armazenamento Ilimitado', 'Gerente de Conta', 'API Dedicada', 'SSO & Segurança'], popular: false },
  ];

  return (
    <section id="preços" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-slate-900 mb-4">Planos Flexíveis</h3>
          <p className="text-slate-600">Escolha o plano ideal para o momento da sua empresa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div key={i} className={`p-8 rounded-[2.5rem] border ${p.popular ? 'border-indigo-600 bg-indigo-600 text-white shadow-2xl shadow-indigo-200' : 'border-slate-100 bg-white text-slate-900'} relative`}>
              {p.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-indigo-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                  Mais Popular
                </div>
              )}
              <h4 className="text-xl font-bold mb-2">{p.name}</h4>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-extrabold">R${p.price}</span>
                <span className={p.popular ? 'text-indigo-200' : 'text-slate-400'}>/mês</span>
              </div>
              <ul className="space-y-4 mb-10">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${p.popular ? 'bg-indigo-500' : 'bg-emerald-100 text-emerald-600'}`}>
                      <Check size={12} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${p.popular ? 'bg-white text-indigo-600 hover:bg-indigo-50' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                Escolher Plano
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-white py-20 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
            <Zap size={20} fill="currentColor" />
          </div>
          <span className="text-xl font-bold tracking-tight">NexusSaaS</span>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">
          Transformando a maneira como empresas modernas operam através de tecnologia inteligente e design intuitivo.
        </p>
        <div className="flex gap-4">
          <Twitter size={20} className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
          <Github size={20} className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
          <Linkedin size={20} className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>

      <div>
        <h5 className="font-bold mb-6">Produto</h5>
        <ul className="space-y-4 text-slate-400 text-sm">
          <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Integrações</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
        </ul>
      </div>

      <div>
        <h5 className="font-bold mb-6">Empresa</h5>
        <ul className="space-y-4 text-slate-400 text-sm">
          <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
        </ul>
      </div>

      <div>
        <h5 className="font-bold mb-6">Newsletter</h5>
        <p className="text-slate-400 text-sm mb-4">Receba as últimas novidades e dicas de produtividade.</p>
        <div className="flex gap-2">
          <input type="email" placeholder="Seu email" className="bg-slate-800 border-none rounded-xl px-4 py-2 text-sm w-full focus:ring-2 focus:ring-indigo-500" />
          <button className="p-2 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:row justify-between items-center gap-4 text-slate-500 text-xs">
      <p>© 2026 Nexus SaaS Inc. Todos os direitos reservados.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-white transition-colors">Privacidade</a>
        <a href="#" className="hover:text-white transition-colors">Termos</a>
        <a href="#" className="hover:text-white transition-colors">Cookies</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        
        {/* Social Proof Section */}
        <section className="py-12 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">
            <div className="flex items-center gap-2 font-bold text-xl"><Globe size={24} /> GLOBAL</div>
            <div className="flex items-center gap-2 font-bold text-xl"><Shield size={24} /> SECURE</div>
            <div className="flex items-center gap-2 font-bold text-xl"><Zap size={24} /> FAST</div>
            <div className="flex items-center gap-2 font-bold text-xl"><BarChart size={24} /> ANALYTICS</div>
          </div>
        </section>

        <Pricing />

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500 to-violet-700 opacity-50" />
            <div className="relative z-10 space-y-8">
              <h3 className="text-4xl md:text-5xl font-bold leading-tight">Pronto para transformar seu negócio?</h3>
              <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
                Junte-se a milhares de empresas que já estão escalando com a Nexus. Comece seu teste gratuito de 14 dias hoje mesmo.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-lg">
                  Criar Conta Grátis
                </button>
                <button className="px-10 py-5 bg-indigo-700 text-white border border-indigo-500 rounded-2xl font-bold text-lg hover:bg-indigo-800 transition-all">
                  Falar com Consultor
                </button>
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
