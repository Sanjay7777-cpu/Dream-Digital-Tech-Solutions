import { motion } from "framer-motion";

import {
Facebook,
Instagram,
Youtube,
Phone,
MapPin,
Mail
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingBubbles from "@/components/ui/FloatingBubbles";

const properties = [

{
title:"Luxury Family House",
price:"NPR 3.2 Cr",
image:
"https://images.unsplash.com/photo-1560518883-ce09059eeffa"
},

{
title:"Modern Apartment",
price:"NPR 1.8 Cr",
image:
"https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
},

{
title:"Commercial Property",
price:"NPR 4.5 Cr",
image:
"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde"
}

];

const RajProperty=()=>{

return(

<div className="min-h-screen bg-background">



<main>

{/* HERO */}

<section className="relative pt-32 pb-20 overflow-hidden">

<FloatingBubbles/>

<div className="container mx-auto px-4">

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
className="glass-card rounded-3xl overflow-hidden"

>

<div className="relative">

<img
src="https://images.unsplash.com/photo-1605146769289-440113cc3d00"
className="h-[600px] w-full object-cover"
/>

<div className="absolute inset-0 bg-black/40"/>

<div
className="
absolute
bottom-16
left-0
right-0
text-center
"
>

<img
src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5"
className="
w-32
h-32
mx-auto
rounded-full
border-4
border-white
object-cover
"
/>

<h1
className="
text-5xl
font-bold
text-white
mt-6
"
>

Raj Property

</h1>

<p
className="
text-white/90
mt-4
"
>

Premium Property Dealer

</p>

<div
className="
flex
justify-center
gap-5
mt-8
"
>

<a href="#">
<Facebook className="text-white"/>
</a>

<a href="#">
<Instagram className="text-white"/>
</a>

<a href="#">
<Youtube className="text-white"/>
</a>

</div>

</div>

</div>

</motion.div>

</div>

</section>

{/* OWNER */}

<section className="py-24">

<div className="container mx-auto px-4">

<div className="glass-card p-10">

<h2
className="
text-4xl
font-bold
mb-8
"
>

Business Owner

</h2>

<div className="space-y-6">

<p>

<strong>
Owner:
</strong>

Raj Kumar

</p>

<p>

Helping clients buy,
sell and invest in
premium real estate
with trust and transparency.

</p>

<div className="space-y-3">

<div className="flex gap-3">

<Phone/>

+977 9800000000

</div>

<div className="flex gap-3">

<MapPin/>

Kathmandu Nepal

</div>

<div className="flex gap-3">

<Mail/>

[rajproperty@gmail.com](mailto:rajproperty@gmail.com)

</div>

</div>

</div>

</div>

</div>

</section>

{/* PROPERTY */}

<section className="py-24 bg-card">

<div className="container mx-auto px-4">

<h2
className="
text-center
text-4xl
font-bold
mb-14
"
>

Listed Properties

</h2>

<div
className="
grid
md:grid-cols-3
gap-8
"
>

{properties.map((item)=>(

<div
key={item.title}
className="glass-card overflow-hidden"
>

<img
src={item.image}
className="
w-full
h-64
object-cover
"
/>

<div className="p-6">

<h3
className="
text-2xl
font-semibold
"
>

{item.title}

</h3>

<p
className="
text-primary
mt-3
"
>

{item.price}

</p>

</div>

</div>

))}

</div>

</div>

</section>

{/* VIDEOS */}

<section className="py-24">

<div className="container mx-auto px-4">

<h2
className="
text-center
text-4xl
font-bold
mb-10
"
>

Property Videos

</h2>

<div
className="
grid
md:grid-cols-2
gap-8
"
>

<iframe
className="
rounded-2xl
w-full
h-[350px]
"
src="https://www.youtube.com/embed/Scxs7L0vhZ4"
/>

<iframe
className="
rounded-2xl
w-full
h-[350px]
"
src="https://www.youtube.com/embed/Bj7mA8L0GqA"
/>

</div>

</div>

</section>

{/* CONTACT */}

<section className="py-24">

<div className="container mx-auto px-4">

<div
className="
glass-card
p-12
text-center
"
>

<h2
className="
text-4xl
font-bold
"
>

Contact Raj Property

</h2>

<p className="mt-6">

Get in touch for
buying,
selling or investment.

</p>

<button
className="
mt-10
px-8
py-4
rounded-xl
bg-primary
text-white
"

>

Contact Now

</button>

</div>

</div>

</section>

</main>



</div>

)

}

export default RajProperty;
