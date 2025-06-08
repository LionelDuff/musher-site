const GoogleMap = () => {
  return (
    <div className="xl:w-[650px] xl:h-[400px] w-full h-[300px] shadow-lg rounded-xl overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2815.66187980382!2d5.00233007663249!3d45.11292175680748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f54f95a29c122b%3A0x2534ea3285bebc2!2sTriskel%20Wolf%20L%C3%A9nada!5e0!3m2!1sfr!2sfr!4v1748363027230!5m2!1sfr!2sfr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
