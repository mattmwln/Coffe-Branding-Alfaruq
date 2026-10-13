import React from 'react';

const MapView = () => {
    return (
        <div className="bg-slate-100 h-[300px] md:h-[500px] rounded-md overflow-hidden mx-6 md:mx-20 my-6">
            <iframe
                allowFullScreen={true}
                className="border shadow-lg rounded-md"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d509431.16206451267!2d103.263863!3d-4.034513!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e376bfdb6b0e3fd%3A0xbf617e2e2022b106!2sJl.%20Kepahiang%20-%20Pagar%20Alam%20No.69%2C%20RT.06%2FRW.02%2C%20Ulu%20Rurah%2C%20Kec.%20Pagar%20Alam%20Sel.%2C%20Kota%20Pagar%20Alam%2C%20Sumatera%20Selatan%2031528%2C%20Indonesia!5e0!3m2!1sid!2sus!4v1733301188800!5m2!1sid!2sus"
                title="maps"
                width="100%"
            />
        </div>
    );
};

export default MapView;
