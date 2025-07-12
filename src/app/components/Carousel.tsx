'use client'
import Slider from 'react-slick'
import Image from 'next/image'

const images = [
  '/1.jpeg',
  '/2.jpeg',
  '/3.jpeg',
  '/4.jpeg',
  '/5.jpeg',
  '/6.jpeg',
  '/7.jpeg',
  '/8.jpeg',
  '/9.jpeg',
  '/10.jpeg',
  '/11.jpeg',
  '/12.jpeg',
  '/13.jpeg',
  '/14.jpeg',
  '/15.jpeg',
]

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <div className="w-1/2 md:w-full max-w-3xl mx-auto py-8">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-64 md:h-128">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}