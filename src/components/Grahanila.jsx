import React from "react";
import grahanila from "../assets/images/grahanila2.png";
import Image from "next/image";
const Grahanila = () => {
  return (
    <div className="container mx-auto px-6 md:px-10 max-w-5xl overflow-hidden mt-12 md:mt-20 ">
      <h2 className="text-4xl font-bold  text-red-700 text-center mb-6">
        ഗ്രഹനില
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="">
          <Image
            src={grahanila}
            alt="introImg"
            className="h-72 object-cover border-2 border-red-700 rounded-bl-4xl rounded-tr-4xl"
            width={500}
            height={500}
          />
        </div>
        <div className="flex items-center justify-center">
          <p className="text-lg text-gray-600 text-left">
            ഗ്രഹനില എന്നത് ജനനസമയത്തെ ഗ്രഹങ്ങളുടെ സൂക്ഷ്മമായ സ്ഥാനക്രമമാണ്. അവ
            മനുഷ്യന്റെ സ്വഭാവത്തെയും ചിന്തകളെയും ജീവിതയാത്രയെയും മൗനമായി
            സ്വാധീനിക്കുന്നു. അനുകൂലമായ ഗ്രഹനില അവസരങ്ങളും സമാധാനവും നൽകുമ്പോൾ,
            വെല്ലുവിളികൾ ആത്മബലം വളർത്തുന്നു. ഇങ്ങനെ, ഗ്രഹനില ജീവിതത്തിന്റെ
            ദിശയെ സുന്ദരമായി രൂപപ്പെടുത്തുന്ന ഒരു നിസ്സംഗ മാർഗ്ഗദർശകമാണ്.
          </p>
          {/* <a href="tel:9633443047"> <button className='cursor-pointer bg-amber-400 text-red-700 px-6 md:px-8 py-1 md:py-2 mt-2 rounded-tr-full rounded-bl-full font-bold text-sm md:text-lg'>ഗ്രഹനില നോക്കാനായി വിളിക്കുക </button></a> */}
        </div>
      </div>
    </div>
  );
};

export default Grahanila;
