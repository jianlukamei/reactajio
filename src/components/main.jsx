import React from 'react';

const AjioContent = () => {
  return (
    <>
      <section className="md:pt-[130px] container mx-auto">
        <div>
          <img src="/assets/images/banner.png" alt="banner" className="w-full h-auto" />
        </div>
      </section>

      <section className="pb-10">
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <img src="/assets/images/sec2image1.gif" alt="Slideshow 1" className="w-full h-auto" />
          </div>

          <div>
            <img src="https://assets.ajio.com/medias/sys_master/images/images/h3e/h5d/47408578691102/15022022-D-unisex-eoss-header.jpg" alt="EOSS Header" className="w-full h-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[699, 999, 'flat70', 'under599'].map((item, index) => (
              <img
                key={index}
                src={`https://assets.ajio.com/medias/sys_master/images/images/${index === 0 ? 'h49/h84/47135235244062/04022022-D-unisex-ajiomania-dealzone-collestdeal' : index === 1 ? 'h96/h0a/47135235309598/04022022-D-unisex-ajiomania-dealzone' : index === 2 ? 'hfe/he9/47135235375134/04022022-D-unisex-ajiomania-dealzone' : 'h29/h82/47408578625566/15022022-M-Unisex-clearance'}-${item}.jpg`}
                alt={`Deal ${item}`}
                className="w-full h-auto"
              />
            ))}
          </div>

          <div>
            <img src="https://assets.ajio.com/medias/sys_master/images/images/h6b/hc6/47135235047454/04022022-D-unisex-ajiomania-fabbrandsmaddeals-strip.jpg" alt="Fab Brands" className="w-full h-auto" />
          </div>

          <div>
            <img src="https://assets.ajio.com/medias/sys_master/images/images/h0c/h05/47135235506206/04022022-D-unisex-ajiomania-freshseasonarrivals-strip.jpg" alt="Fresh Season" className="w-full h-auto" />
            <img src="https://assets.ajio.com/medias/sys_master/images/images/hff/h44/47135235637278/04022022-D-unisex-ajiomania-ss22-upto30.jpg" alt="SS22" className="w-full h-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img src="https://assets.ajio.com/medias/sys_master/images/images/hbf/h75/47366647513118/15022022-D-Unisex-flashdeal-header.jpg" alt="Flash Deal" className="w-full h-auto" />
            <img src="https://assets.ajio.com/medias/sys_master/images/images/hb5/h06/47512407736350/22022022-D-Unisex-flashdeal-shoes-flat65.jpg" alt="Flat 65" className="w-full h-auto" />
          </div>

          <div>
            <img src="https://assets.ajio.com/medias/sys_master/images/images/hf4/hf4/47135235702814/04022022-D-unisex-ajiomania-ourexclusivebrands-strip.jpg" alt="Exclusive Brands" className="w-full h-auto" />
          </div>

         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-4">
  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
    <img
      key={num}
      src={`/assets/images/page${num}.jpg`}  // simple, clean path
      alt={`Must Have ${num}`}
      className="w-full h-auto"
    />
  ))}
</div>

        </div>
      </section>
    </>
  );
};

export default AjioContent;
