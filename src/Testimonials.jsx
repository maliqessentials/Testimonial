// eslint-disable-next-line no-unused-vars
import React from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Ashraf",
    title: "Engineer",
    text: "Yang tiba-tiba mekar di taman Meski bicara dengan bahasa tumbuhan",
  },
  {
    name: "Sal priadi",
    title: "Reviewer",
    text: "Ceritakan padaku Bagaimana tempat tinggalmu yang baruAdakah sungai sungai itu benar benar",
  },
  {
    name: "Yanto",
    title: "Supervisor",
    text: "Luar biasa materi nya, lengkap dan selalu update. Saya merasa materi yang disampaikan benar - benar sesuai dengan kebutuhan dunia kerja, banyak materi maupun project yang dapat saya implementasikan di kantor. Reviewernya juga aktif dan tanggap, keren.",
  },
  {
    name: "Yoshua widodo",
    title: "IT",
    text: "Belajar di Dicoding mengajarkan kepada saya bahwa menyerah itu bukan pilihan yang terbaik jika kita mau mengembangkan bakat kita. Terima Kasih dicoding, review codingnya sangat teliti dan jeli sekali. saya jadi tahu source code apa yang harus saya perbaiki..",
  },
  {
    name: "Arya wiguna",
    title: "Finance",
    text: "Berkat lulus dari kelas fundamental aplikasi android, saya menjadi lebih faham mengenai semual hal yang berkaitan dengan android development",
  },
  {
    name: "Wawan Gunawan",
    title: "Programmer",
    text: "Kelas yang bagus banget untuk memperdalam dunia pembuatan aplikasi android karena selama ini aplikasi yang saya buat kurang bagus untuk diterapkan secara luas, namun berkat kelas ini jadi lebih yakin buat kembangkan aplikasi karena mendapatkan materi yang sangat keren banget. Terima Kasih Dicoding :D",
  },
];

const Testimonials = () => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          name={testimonial.name}
          title={testimonial.title}
          text={testimonial.text}
        />
      ))}
    </div>
  );
};

export default Testimonials;
