import Image from "next/image";

export default function WhyChooseUs({ services }) {
  return (
    <section className="mx-auto my-12 hidden w-full max-w-7xl px-4 lg:block">
      <h2 className="mb-14 text-center text-2xl font-extrabold text-gray-900">چرا دسترسی رو برای خرید انتخاب کنیم؟</h2>

      <div className="grid grid-cols-4 gap-12">
        {services.map(service => (
          <div key={service.id} className="flex flex-col items-center text-center">
            <div className="relative mb-4 h-16 w-16">
              <Image src={service.img} alt={service.title} fill sizes="64px" className="object-contain" />
            </div>

            <h3 className="mb-3 text-base font-bold text-[#777]">{service.title}</h3>
            <p className="max-w-64 text-sm leading-8 text-gray-800">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}