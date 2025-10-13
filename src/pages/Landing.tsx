import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Sparkles, Zap, Shield, Users, ArrowRight, Check } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "IA Avançada",
    description: "Assistente inteligente com processamento de linguagem natural de última geração."
  },
  {
    icon: Zap,
    title: "Alta Performance",
    description: "Infraestrutura escalável que cresce com sua empresa sem limites."
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "BYOK (Bring Your Own Key) para controle total dos seus dados."
  },
  {
    icon: Users,
    title: "Multi-Tenant",
    description: "Gestão isolada e segura para múltiplas empresas na mesma plataforma."
  }
];

const plans = [
  {
    name: "Básico",
    price: "R$ 99",
    period: "/mês",
    description: "Ideal para pequenas equipes começando",
    features: [
      "Até 10 usuários",
      "5.000 requisições IA/mês",
      "Suporte por email",
      "Dashboard básico",
      "API access"
    ],
    highlighted: false
  },
  {
    name: "Empresa",
    price: "R$ 299",
    period: "/mês",
    description: "Para empresas em crescimento",
    features: [
      "Até 50 usuários",
      "50.000 requisições IA/mês",
      "Suporte prioritário",
      "Analytics avançado",
      "Customização de IA",
      "BYOK disponível"
    ],
    highlighted: true
  },
  {
    name: "Master",
    price: "Personalizado",
    period: "",
    description: "Solução enterprise completa",
    features: [
      "Usuários ilimitados",
      "Requisições ilimitadas",
      "Suporte 24/7 dedicado",
      "SLA garantido",
      "Onboarding personalizado",
      "Infraestrutura dedicada"
    ],
    highlighted: false
  }
];

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <h1 className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
            ControlIA.io
          </h1>
          <div className="flex items-center gap-4">
            <Link to="/auth/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/auth/register">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-primary">
                Começar Agora
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-hero-gradient opacity-20" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Plataforma SaaS Multi-Tenant
            </Badge>
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Automação Inteligente{" "}
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                Impulsionada por IA
              </span>
            </h2>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Transforme sua empresa com assistentes de IA personalizados. Gestão completa, 
              segurança enterprise e escalabilidade sem limites.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/auth/register">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-primary">
                  Comece Gratuitamente
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
                Ver Demonstração
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold">Recursos Poderosos</h3>
            <p className="text-lg text-muted-foreground">
              Tudo que você precisa para automatizar e escalar seu negócio
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-border bg-card hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="mb-2 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold">Planos Flexíveis</h3>
            <p className="text-lg text-muted-foreground">
              Escolha o plano ideal para o seu negócio
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative border-border ${
                  plan.highlighted 
                    ? 'border-primary shadow-glow-primary scale-105' 
                    : 'hover:border-primary/50'
                } transition-all`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-secondary text-secondary-foreground">
                      Mais Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to="/auth/register" className="w-full">
                    <Button 
                      className={`w-full ${
                        plan.highlighted 
                          ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                          : 'bg-muted hover:bg-muted/80'
                      }`}
                    >
                      Começar Agora
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h4 className="mb-2 text-xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              ControlIA.io
            </h4>
            <p className="text-sm text-muted-foreground">
              © 2024 ControlIA.io. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
