import React from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Check,
  Bell,
  TrendingUp,
  Users,
  CreditCard
} from "lucide-react";



function MiniCard({
  icon,
  title,
  value
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {

  return (
    <div className="
      bg-gray-50
      rounded-2xl
      p-4
    ">

      <div className="
        text-blue-600
        mb-2
      ">
        {icon}
      </div>

      <p className="
        text-xs
        text-gray-400
        font-semibold
      ">
        {title}
      </p>

      <strong className="
        text-lg
        font-black
      ">
        {value}
      </strong>

    </div>
  );
}



function FeatureCard({
  icon,
  title,
  text
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {

  return (
    <motion.div

      whileHover={{
        y:-10
      }}

      className="
        rounded-[32px]
        bg-[#f8faff]
        p-8
        border
        border-blue-100
        hover:shadow-xl
        transition
      "
    >

      <div className="
        w-14
        h-14
        rounded-2xl
        bg-blue-600
        flex
        items-center
        justify-center
        text-3xl
        mb-6
      ">
        {icon}
      </div>


      <h3 className="
        text-xl
        font-black
        mb-3
      ">
        {title}
      </h3>


      <p className="
        text-gray-500
        leading-relaxed
      ">
        {text}
      </p>


    </motion.div>
  );
}




export default function App() {

return (

<div className="
  min-h-screen
  overflow-hidden
  bg-[#f8faff]
  text-[#071A3D]
">



{/* NAVBAR */}

<nav className="
 fixed
 top-0
 left-0
 right-0
 z-50
 bg-white/80
 backdrop-blur-xl
 border-b
 border-blue-100
">

<div className="
 max-w-7xl
 mx-auto
 px-6
 py-5
 flex
 items-center
 justify-between
">


<div className="
 flex
 items-center
 gap-3
">


<div className="
 w-10
 h-10
 rounded-xl
 bg-gradient-to-br
 from-blue-600
 to-indigo-500
 flex
 items-center
 justify-center
 text-white
 font-black
 shadow-lg
">

J

</div>


<span className="
 text-2xl
 font-extrabold
 tracking-tight
">

Juris<span className="text-blue-600">
Pag
</span>

</span>


</div>




<div className="
 hidden
 md:flex
 gap-8
 text-sm
 font-semibold
 text-gray-600
">


<a className="hover:text-blue-600 transition">
Produto
</a>


<a className="hover:text-blue-600 transition">
Benefícios
</a>


<a className="hover:text-blue-600 transition">
Clientes
</a>


</div>




<button className="
 rounded-full
 bg-[#071A3D]
 text-white
 px-6
 py-3
 font-bold
 hover:bg-blue-700
 transition
 shadow-lg
">

Testar grátis

</button>


</div>

</nav>







{/* HERO */}


<section className="
 relative
 pt-40
 px-6
 pb-32
">


<div className="
 absolute
 -top-40
 -right-40
 w-[500px]
 h-[500px]
 bg-blue-400/20
 blur-3xl
 rounded-full
"/>



<div className="
 absolute
 bottom-0
 -left-40
 w-[400px]
 h-[400px]
 bg-yellow-300/20
 blur-3xl
 rounded-full
"/>




<div className="
 max-w-7xl
 mx-auto
 grid
 lg:grid-cols-2
 gap-16
 items-center
">



<motion.div

initial={{
 opacity:0,
 y:40
}}

animate={{
 opacity:1,
 y:0
}}

transition={{
 duration:.8
}}

>


<span className="
 inline-flex
 items-center
 gap-2
 px-4
 py-2
 rounded-full
 bg-blue-100
 text-blue-700
 font-bold
 text-sm
 mb-6
">

✦ Gestão financeira jurídica inteligente

</span>




<h1 className="
 text-5xl
 md:text-7xl
 font-black
 leading-[1.05]
 tracking-tight
">


Controle seus


<span className="
 block
 bg-gradient-to-r
 from-blue-600
 to-indigo-500
 bg-clip-text
 text-transparent
">

honorários

</span>


sem perder dinheiro.


</h1>




<p className="
 mt-6
 text-lg
 text-gray-600
 max-w-xl
 leading-relaxed
">

Organize pagamentos, acordos e cobranças automaticamente.
Tenha uma visão completa do financeiro do seu escritório.

</p>




<div className="
 mt-10
 flex
 flex-wrap
 gap-4
">


<button className="
 group
 flex
 items-center
 gap-3
 bg-yellow-400
 px-8
 py-4
 rounded-full
 font-extrabold
 shadow-xl
 hover:-translate-y-1
 transition
">

Começar grátis


<ArrowRight className="
 group-hover:translate-x-1
 transition
"/>


</button>



<button className="
 px-8
 py-4
 rounded-full
 border-2
 border-gray-200
 font-bold
 hover:border-blue-500
 transition
">

Ver demonstração

</button>



</div>




<div className="
 mt-10
 flex
 gap-8
 text-sm
 font-semibold
 text-gray-500
">


<span className="flex gap-2">

<Check className="text-green-500"/>

Sem cartão

</span>



<span className="flex gap-2">

<Check className="text-green-500"/>

14 dias grátis

</span>



</div>




</motion.div>
{/* DASHBOARD MOCKUP */}

<motion.div

initial={{
 opacity:0,
 scale:.9,
 x:50
}}

animate={{
 opacity:1,
 scale:1,
 x:0
}}

transition={{
 duration:.9,
 delay:.2
}}

className="
 relative
 flex
 justify-center
"

>


<div className="
 absolute
 inset-0
 bg-blue-500/20
 blur-3xl
 rounded-full
"/>



<motion.div

animate={{
 y:[0,-12,0]
}}

transition={{
 duration:5,
 repeat:Infinity
}}

className="
 relative
 w-full
 max-w-[460px]
 bg-white
 rounded-[32px]
 shadow-[0_40px_100px_rgba(7,26,61,.18)]
 border
 border-gray-100
 p-6
"

>


<div className="
 flex
 justify-between
 items-center
 mb-8
">


<div>

<p className="
 text-sm
 text-gray-400
 font-semibold
">

Receita este mês

</p>


<h3 className="
 text-3xl
 font-black
 mt-1
">

R$ 132.980

</h3>


</div>



<div className="
 flex
 items-center
 gap-2
 bg-green-100
 text-green-600
 px-3
 py-2
 rounded-full
 text-sm
 font-bold
">


<TrendingUp size={16}/>

+18%

</div>


</div>






<div className="
 h-40
 rounded-3xl
 bg-gradient-to-br
 from-blue-50
 to-indigo-50
 p-5
 flex
 items-end
 gap-3
">


{
[30,45,35,70,55,90,75].map(
(height,index)=>(

<motion.div

key={index}

initial={{
height:0
}}

animate={{
height:`${height}%`
}}

transition={{
duration:.8,
delay:index*.1
}}

className={`
 flex-1
 rounded-t-xl
 ${
 index > 4
 ?
 "bg-yellow-400"
 :
 "bg-blue-600"
 }
`}

/>

))
}



</div>






<div className="
 grid
 grid-cols-3
 gap-3
 mt-6
">


<MiniCard

icon={<Users size={18}/>}

title="Clientes"

value="248"

/>



<MiniCard

icon={<CreditCard size={18}/>}

title="Pagamentos"

value="94%"

/>



<MiniCard

icon={<Bell size={18}/>}

title="Alertas"

value="12"

/>



</div>






<motion.div

animate={{
 x:[0,10,0]
}}

transition={{
 duration:4,
 repeat:Infinity
}}

className="
 absolute
 -right-8
 top-24
 bg-white
 shadow-xl
 rounded-2xl
 p-4
 flex
 gap-3
 items-center
 border
 border-gray-100
"


>


<div className="
 w-10
 h-10
 rounded-full
 bg-green-100
 flex
 items-center
 justify-center
 text-green-600
">

✓

</div>



<div>

<p className="
 text-sm
 font-bold
">

Pagamento recebido

</p>


<span className="
 text-xs
 text-gray-400
">

Cliente atualizado

</span>


</div>


</motion.div>


</motion.div>


</motion.div>


</div>

</section>







{/* BENEFÍCIOS */}


<section className="
 py-28
 px-6
 bg-white
">


<div className="
 max-w-7xl
 mx-auto
">


<div className="
 text-center
 max-w-3xl
 mx-auto
">


<span className="
 text-blue-600
 font-extrabold
 uppercase
 tracking-widest
 text-sm
">

Por que usar o JurisPag

</span>



<h2 className="
 mt-4
 text-4xl
 md:text-6xl
 font-black
 tracking-tight
">

Tudo que seu escritório precisa
para crescer organizado.

</h2>



<p className="
 mt-6
 text-gray-500
 text-lg
">

Automatize cobranças, acompanhe pagamentos
e tenha controle financeiro sem planilhas.

</p>


</div>





<div className="
 mt-16
 grid
 md:grid-cols-3
 gap-8
">



<FeatureCard

icon="⚡"

title="Cobrança automática"

text="
Envie lembretes de pagamento e reduza atrasos
sem precisar cobrar manualmente.
"

/>



<FeatureCard

icon="📊"

title="Visão financeira"

text="
Saiba exatamente quanto entrou,
quanto falta receber e seus próximos valores.
"

/>



<FeatureCard

icon="🔒"

title="Controle seguro"

text="
Dados organizados e protegidos
para seu escritório trabalhar tranquilo.
"

/>



</div>


</div>


</section>








{/* ANTES E DEPOIS */}


<section className="
 py-28
 px-6
 bg-[#f8faff]
">


<div className="
 max-w-6xl
 mx-auto
">


<div className="
 text-center
 mb-14
">


<h2 className="
 text-4xl
 md:text-5xl
 font-black
">

Pare de perder tempo
com processos manuais.

</h2>


</div>






<div className="
 grid
 md:grid-cols-2
 gap-8
">





<div className="
 rounded-[32px]
 bg-white
 border
 border-red-100
 p-10
 shadow-sm
">


<div className="
 text-red-500
 font-black
 text-xl
 mb-6
">

❌ Antes do JurisPag

</div>




<ul className="
 space-y-5
 text-gray-600
 font-medium
">


<li>
❌ Planilhas espalhadas
</li>


<li>
❌ Cobranças esquecidas
</li>


<li>
❌ Falta de visão do caixa
</li>


<li>
❌ Tempo perdido conferindo pagamentos
</li>


</ul>


</div>







<div className="
 rounded-[32px]
 bg-[#071A3D]
 text-white
 p-10
 shadow-xl
">


<div className="
 text-yellow-400
 font-black
 text-xl
 mb-6
">

✅ Com JurisPag

</div>



<ul className="
 space-y-5
 text-blue-100
 font-medium
">


<li>
✓ Tudo centralizado
</li>


<li>
✓ Cobranças automáticas
</li>


<li>
✓ Dashboard em tempo real
</li>


<li>
✓ Mais controle financeiro
</li>


</ul>


</div>





</div>


</div>


</section>
{/* NÚMEROS */}

<section className="
 py-24
 px-6
">


<div className="
 max-w-6xl
 mx-auto
 bg-gradient-to-br
 from-blue-700
 to-indigo-700
 rounded-[40px]
 p-10
 md:p-16
 text-white
">


<div className="
 grid
 md:grid-cols-3
 gap-10
 text-center
">


<div>

<h3 className="
 text-5xl
 md:text-6xl
 font-black
 text-yellow-400
">

94%

</h3>


<p className="
 mt-3
 text-blue-100
 font-semibold
">

Pagamentos acompanhados

</p>

</div>





<div>

<h3 className="
 text-5xl
 md:text-6xl
 font-black
 text-yellow-400
">

340+

</h3>


<p className="
 mt-3
 text-blue-100
 font-semibold
">

Escritórios conectados

</p>

</div>





<div>

<h3 className="
 text-5xl
 md:text-6xl
 font-black
 text-yellow-400
">

12h

</h3>


<p className="
 mt-3
 text-blue-100
 font-semibold
">

Economizadas por mês

</p>

</div>



</div>


</div>


</section>








{/* DEPOIMENTOS */}


<section className="
 py-28
 px-6
 bg-white
">


<div className="
 max-w-6xl
 mx-auto
">



<div className="
 text-center
 mb-16
">


<span className="
 text-blue-600
 font-extrabold
 uppercase
 tracking-widest
 text-sm
">

Clientes

</span>



<h2 className="
 mt-4
 text-4xl
 md:text-5xl
 font-black
">

Quem usa o JurisPag
tem mais controle.

</h2>


</div>







<div className="
 grid
 md:grid-cols-3
 gap-8
">



<motion.div

whileHover={{
scale:1.03
}}

className="
 bg-[#f8faff]
 rounded-[32px]
 p-8
 border
 border-blue-100
 hover:shadow-xl
 transition
"

>


<div className="
 text-yellow-400
 text-xl
 mb-5
">

★★★★★

</div>


<p className="
 text-gray-600
 leading-relaxed
">

"Antes eu precisava conferir várias planilhas.
Agora vejo tudo em poucos segundos."

</p>



<div className="
 mt-6
">


<strong className="
 block
 font-black
">

Dra. Camila

</strong>


<span className="
 text-gray-400
 text-sm
">

Nogueira Advocacia

</span>


</div>


</motion.div>







<motion.div

whileHover={{
scale:1.03
}}

className="
 bg-[#f8faff]
 rounded-[32px]
 p-8
 border
 border-blue-100
 hover:shadow-xl
 transition
"

>


<div className="
 text-yellow-400
 text-xl
 mb-5
">

★★★★★

</div>


<p className="
 text-gray-600
 leading-relaxed
">

"A cobrança automática mudou nossa rotina.
Conseguimos reduzir atrasos."

</p>



<div className="
 mt-6
">


<strong className="
 block
 font-black
">

Dr. Rafael

</strong>


<span className="
 text-gray-400
 text-sm
">

Ribeiro & Associados

</span>


</div>


</motion.div>







<motion.div

whileHover={{
scale:1.03
}}

className="
 bg-[#f8faff]
 rounded-[32px]
 p-8
 border
 border-blue-100
 hover:shadow-xl
 transition
"

>


<div className="
 text-yellow-400
 text-xl
 mb-5
">

★★★★★

</div>


<p className="
 text-gray-600
 leading-relaxed
">

"Finalmente temos uma visão clara
do financeiro do escritório."

</p>



<div className="
 mt-6
">


<strong className="
 block
 font-black
">

Dra. Ana

</strong>


<span className="
 text-gray-400
 text-sm
">

Costa Jurídico

</span>


</div>


</motion.div>




</div>


</div>


</section>









{/* CTA FINAL */}



<section className="
 px-6
 py-20
">


<div className="
 max-w-6xl
 mx-auto
 relative
 overflow-hidden
 rounded-[45px]
 bg-gradient-to-br
 from-[#071A3D]
 to-blue-700
 px-8
 py-20
 text-center
 text-white
">


<div className="
 absolute
 w-[400px]
 h-[400px]
 rounded-full
 bg-yellow-400/20
 blur-3xl
 top-[-160px]
 right-[-20px]
"/>





<div className="
 relative
">


<h2 className="
 text-4xl
 md:text-6xl
 font-black
 leading-tight
">

Seu escritório no azul

<br/>

<span className="
 text-yellow-400
">

começa hoje.

</span>


</h2>





<p className="
 mt-6
 text-blue-100
 text-lg
 max-w-xl
 mx-auto
">

Teste gratuitamente e descubra
como simplificar sua gestão financeira.

</p>






<button className="
 mt-10
 bg-yellow-400
 text-[#071A3D]
 px-10
 py-5
 rounded-full
 font-black
 text-lg
 shadow-xl
 hover:-translate-y-1
 transition
">

Começar agora 🚀

</button>




</div>



</div>


</section>
{/* FOOTER */}


<footer className="
 px-6
 py-10
 border-t
 border-gray-100
 bg-white
">


<div className="
 max-w-7xl
 mx-auto
 flex
 flex-col
 md:flex-row
 justify-between
 items-center
 gap-5
">



<div className="
 flex
 items-center
 gap-3
">


<div className="
 w-10
 h-10
 rounded-xl
 bg-blue-600
 text-white
 flex
 items-center
 justify-center
 font-black
">

J

</div>




<strong className="
 text-xl
 font-black
">

Juris<span className="
 text-blue-600
">
Pag
</span>

</strong>


</div>





<p className="
 text-gray-400
 text-sm
">

© 2026 JurisPag. Todos os direitos reservados.

</p>





<div className="
 flex
 gap-6
 text-sm
 font-semibold
 text-gray-500
">


<a className="
 hover:text-blue-600
 transition
">

Termos

</a>



<a className="
 hover:text-blue-600
 transition
">

Privacidade

</a>




<a className="
 hover:text-blue-600
 transition
">

Contato

</a>



</div>



</div>


</footer>




</div>

);

}