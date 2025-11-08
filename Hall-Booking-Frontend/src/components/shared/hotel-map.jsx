export default function HotelMap({ location }) {
  return (
    <div className="rounded-lg overflow-hidden h-96 bg-gray-200">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8179220741446!2d103.85520231531384!3d1.2865271989999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190c2db0e8f1%3A0x2d3e6e6e6e6e6e6e!2sThe%20Fullerton%20Hotel%20Singapore!5e0!3m2!1sen!2ssg!4v1234567890"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
