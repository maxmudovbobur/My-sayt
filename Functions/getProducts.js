// 📁 src/Functions/getProducts.js

// Mahsulotlar ro‘yxati (agar fetch ishlamasa — fallback uchun)
const products = [
  
  {
    "id": 1,
    "name": "Paracetamol 500mg",
    "price": "12000",
    "short": "Bosh og‘rig‘iga va isitmaga qarshi dori.",
    "dose": "20 tabletka",
    "image": "https://images.apteka.ru/original_2af8a349-6b17-4bbf-b1f9-d247fd131eb0.png"
  },
  {
    "id": 2,
    "name": "Amoxicillin 500mg",
    "price": "18500",
    "short": "Bakterial infeksiyalarga qarshi antibiotik.",
    "dose": "20 kapsula",
    "image": "https://www.avva-rus.ru/upload/resize_cache/iblock/bcb/500_400_1/%D0%90%D0%BC%D0%BE%D0%BA%D1%81%D0%B8%D1%86%D0%B8%D0%BB%D0%BB%D0%B8%D0%BD%20500%D0%BC%D0%B3%20%E2%84%9620.jpg"
  },
  {
    "id": 3,
    "name": "Ibuprofen 200mg",
    "price": "15000",
    "short": "Og‘riq va yallig‘lanishga qarshi vosita.",
    "dose": "50 dona",
    "image": "https://borimed.com/sites/default/files/product/%D0%98%D0%B1%D1%83%D0%BF%D1%80%D0%BE%D1%84%D0%B5%D0%BD-200-new.jpg"
  },
  {
    "id": 4,
    "name": "Vitamin C 1000mg",
    "price": "22000",
    "short": "Immunitetni kuchaytiradi va shamollashdan himoya qiladi.",
    "dose": "250 tabletka",
    "image": "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/amn/amn02065/y/48.jpg"
  },
  {
    "id": 5,
    "name": "Aspirin 100mg",
    "price": "9500",
    "short": "Qon aylanishini yaxshilovchi va og‘riqni kamaytiruvchi.",
    "dose": "30 tabletka",
    "image": "https://medicinaonline.ae/cdn/shop/products/Aspirin-Protect-30_s.jpg?v=1739955568"
  },
  {
    "id": 6,
    "name": "Panadol Extra",
    "price": "14000",
    "short": "Bosh va tish og‘rig‘ini kamaytiruvchi dori.",
    "dose": "32 dona",
    "image": "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol-reborn/en_GB/newpackshots202406/Extra-Advance-32s.jpg?auto=format"
  },
  {
    "id": 7,
    "name": "No-Spa 40mg",
    "price": "11500",
    "short": "Mushak spazmlari va og‘riqlarga qarshi dori.",
    "dose": "24 tabletka",
    "image": "https://products.pharmamt.com/wp-content/uploads/sites/2/2024/03/no-spa-40-mg-24-film.webp"
  },
  {
    "id": 8,
    "name": "Zinc + Vitamin D3",
    "price": "25000",
    "short": "Immunitetni qo‘llab-quvvatlaydi.",
    "dose": "100 kapsula",
    "image": "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/nbc/nbc00520/y/24.jpg"
  },
  {
    "id": 9,
    "name": "Nurofen Forte",
    "price": "17000",
    "short": "Issiqlik va og‘riqqa qarshi samarali vosita.",
    "dose": "30 tabletka",
    "image": "https://eeab0c26-8615-46dc-943f-eb73c30455b0.selstorage.ru/1492/c9yXmU0m4xeacJWQTQwlJJkruUIUAW-meta0K3QutGB0L_RgNC10YHRgSDRhNC+0YDRgtC1IDMwINGI0YIucG5n-.png"
  },
  {
    "id": 10,
    "name": "Claritin 10mg",
    "price": "27000",
    "short": "Allergiya belgilari uchun antihistamin.",
    "dose": "30 dona",
    "image": "https://m.media-amazon.com/images/I/71OF2fZJOvL._AC_SL1000_.jpg"
  },
  {
    "id": 11,
    "name": "Loratadine",
    "price": "23000",
    "short": "Burun bitishi va allergiyaga qarshi dori.",
    "dose": "10 tabletka",
    "image": "https://pharmaclick.uz/upload/resize_cache/iblock/491/1500_1500_1a35b42a0a6b3f965a22c6480f3b236ff/j8tlaftdlq16g1br5uetu3flr5nhj1ac.jpg"
  },
  {
    "id": 12,
    "name": "Omeprazole 20mg",
    "price": "16000",
    "short": "Oshqozon kislotasini kamaytiruvchi dori.",
    "dose": "30 kapsula",
    "image": "https://www.avva-rus.ru/upload/resize_cache/iblock/2b6/500_400_1/%D0%9E%D0%BC%D0%B5%D0%BF%D1%80%D0%B0%D0%B7%D0%BE%D0%BB%2020%D0%BC%D0%B3%20%E2%84%9630.jpg"
  },
  {
    "id": 13,
    "name": "Azithromycin 500mg",
    "price": "35000",
    "short": "Keng ta’sir doirasiga ega antibiotik.",
    "dose": "20 tabletka",
    "image": "https://img500.exportersindia.com/product_images/bc-500/2023/9/11784061/azithromycin-500-mg-tablet-1686139233-6927623.jpeg"
  },
  {
    "id": 14,
    "name": "Ceftriaxone",
    "price": "28000",
    "short": "In’eksiya uchun antibiotik vosita.",
    "dose": "1 flakon",
    "image": "https://www.mountainside-medical.com/cdn/shop/files/Ceftriaxone-Injection-500-mg-Single-Dose-Vial-by-Apotex-Corp-NDC-60505-6152-04_700x700.jpg?v=1723485936"
  },
  {
    "id": 15,
    "name": "Hydrocortisone Cream",
    "price": "24000",
    "short": "Teri yallig‘lanishiga qarshi krem.",
    "dose": "20g tuba",
    "image": "https://pics.walgreens.com/prodimg/595116/900.jpg"
  },
  {
    "id": 16,
    "name": "Cetirizine 10mg",
    "price": "18000",
    "short": "Allergiyaga qarshi antihistamin tabletkasi.",
    "dose": "30 tabletka",
    "image": "https://medino-product.imgix.net/teva-cetirizine-10mg-hay-fever-allergy-relief-30-tablets-b9ce9411.png?h=350&w=350&fit=fill&bg=FFF&auto=format&q=90"
  },
  {
    "id": 17,
    "name": "Metformin 500mg",
    "price": "20000",
    "short": "Qandli diabet uchun dori vosita.",
    "dose": "30 tabletka",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Metformin_500mg_Tablets.jpg/1200px-Metformin_500mg_Tablets.jpg"
  },
  {
    "id": 18,
    "name": "Captopril 50mg",
    "price": "13000",
    "short": "Qon bosimini pasaytiruvchi vosita.",
    "dose": "30 tabletka",
    "image": "https://calox.com/wp-content/uploads/2022/12/Captopril-50x30-1.png"
  },
  {
    "id": 19,
    "name": "Furosemide 40mg",
    "price": "15500",
    "short": "Siydik haydovchi dori, yurak shishlariga qarshi.",
    "dose": "20 tabletka",
    "image": "https://www.careformulationlabs.com/uploaded_files/furosemide-40-tablets.jpg"
  },
  {
    "id": 20,
    "name": "Prednisolone 5mg",
    "price": "19000",
    "short": "Yallig‘lanishga qarshi gormonal dori.",
    "dose": "28 tabletka",
    "image": "https://pharmaceutical-journal.com/wp-content/uploads/2021/12/prednisolone-tablets-scaled-e1638542125255.jpg"
  },
  {
    "id": 21,
    "name": "Ranitidine 150mg",
    "price": "17000",
    "short": "Oshqozon kislotasini kamaytiruvchi vosita.",
    "dose": "20 tabletka",
    "image": "https://hexpharmjaya.com/generik/wp-content/uploads/2023/06/ranitidine-hcl-150-mg-scaled.jpg"
  },
  {
    "id": 22,
    "name": "Drotaverine 40mg",
    "price": "12000",
    "short": "Spazmlarni bartaraf etuvchi tabletkalar.",
    "dose": "12 dona",
    "image": "https://cpimg.tistatic.com/05682713/b/4/Drotaverine-40Mg-Tablets.jpg"
  },
  {
    "id": 23,
    "name": "Loperamide 2mg",
    "price": "14500",
    "short": "Ich ketishga qarshi vosita.",
    "dose": "30 kapsula",
    "image": "https://smilepharma.co.uk/wp-content/uploads/2024/12/Loperamide-2mg-30-Capsules.jpg"
  },
  {
    "id": 24,
    "name": "Activated Charcoal",
    "price": "10000",
    "short": "Zaharli moddalarni chiqaruvchi adsorbent.",
    "dose": "20 tabletka",
    "image": "https://m.media-amazon.com/images/I/71Wa7kmkrYL.jpg"
  },
  {
    "id": 25,
    "name": "Linex Forte",
    "price": "27000",
    "short": "Ichak mikroflorasini tiklovchi probiotik.",
    "dose": "14 kapsula",
    "image": "https://cdn.eapteka.ru/upload/offer_photo/238/760/resized/450_450_3_9097451bb456b4d7e38295c15bf4f912.png?t=1740729137&_cvc=1758609862"
  },
  {
    "id": 26,
    "name": "Mezim Forte",
    "price": "24000",
    "short": "Ovqat hazm qilishga yordam beruvchi ferment.",
    "dose": "20 tabletka",
    "image": "https://oxymed.uz/storage/resize_cache/500_500_no_crop___/product_images/SrDNXmoooeQuVopT8qLpPBJy5JBbnulWVFqr3qdv.webp"
  },
  {
    "id": 27,
    "name": "Omez 20mg",
    "price": "21000",
    "short": "Oshqozon qichishini kamaytiruvchi vosita.",
    "dose": "30 kapsula",
    "image": "https://aptekaonline.uz/wp-content/uploads/omezkaps20mg30.webp"
  },
  {
    "id": 28,
    "name": "Ambroxol Syrup",
    "price": "18000",
    "short": "Yo‘talni yumshatuvchi sirop.",
    "dose": "60 ml shisha",
    "image": "https://wonneinternational.com/wp-content/uploads/2022/10/Ambroxol-Hydrochloride-30-mg-Guaiphensin-50-mg-Levosalbutamol-1-mg-SYRUP-%E2%80%93-Amborex-LS-SYRUP.png"
  },
  {
    "id": 29,
    "name": "Bromhexine",
    "price": "17000",
    "short": "Balg‘am ko‘chirishni osonlashtiruvchi dori.",
    "dose": "60 ml",
    "image": "https://ppmpharma.com/cdn/shop/products/Bromhexine-sp-60ml.png?v=1680237219&width=1445"
  },
  {
    "id": 30,
    "name": "ACC 200mg",
    "price": "26000",
    "short": "Yo‘talga qarshi shilliqni erituvchi vosita.",
    "dose": "10 paket",
    "image": "https://rafpharmacy.com/cdn/shop/files/acc-long-600mg-effervescent-tablets-10s.jpg?v=1741444635"
  },
   {
    "id": 31,
    "name": "Suprastin 25mg",
    "price": "19000",
    "short": "Allergiyaga qarshi antihistamin vosita.",
    "dose": "20 tabletka",
    "image": "https://images.e-menessaptieka.lv/unsafe/1200x/1c/30/695a21bae2279a27092a33c145c0.png"
  },
  {
    "id": 32,
    "name": "Dexamethasone",
    "price": "23000",
    "short": "Yallig‘lanish va allergiyaga qarshi gormonal dori.",
    "dose": "50 ampula",
    "image": "https://d2cbg94ubxgsnp.cloudfront.net/Pictures/2000xAny/9/0/1/505901_shutterstock_1758689069_873016.jpg"
  },
  {
    "id": 33,
    "name": "Hydroxychloroquine 200mg",
    "price": "45000",
    "short": "Autoimmun kasalliklar uchun dori vosita.",
    "dose": "60 tabletka",
    "image": "https://www.clinicaltrialsarena.com/wp-content/uploads/sites/22/2020/03/Image-1-Hydroxychloroquine.jpg"
  },
  {
    "id": 34,
    "name": "Diclofenac Gel",
    "price": "27000",
    "short": "Tashqi qo‘llanadigan og‘riqqa qarshi gel.",
    "dose": "50g tuba",
    "image": "https://target.scene7.com/is/image/Target/GUEST_c19dfb2b-9fb3-4a54-b99b-61ebce4db38d"
  },
  {
    "id": 35,
    "name": "Ketorol 10mg",
    "price": "20000",
    "short": "Kuchli og‘riqlarga qarshi tabletkalar.",
    "dose": "10 tabletka",
    "image": "https://media.ecom.md/swift/v1/AUTH_e78b75cf5be94082a583fedd6afb6222/ecom_prod/media/media/9/10159/cb0db768f2c242c781db84ab391b49bd_eI3qz2N.webp"
  },
  {
    "id": 36,
    "name": "Tramadol 50mg",
    "price": "31000",
    "short": "Og‘riqni kamaytiruvchi kuchli vosita.",
    "dose": "20 kapsula",
    "image": "https://www.vidal.ru/upload/products/22731-tramadol-50-prana.jpg"
  },
  {
    "id": 37,
    "name": "Nitroglycerin",
    "price": "18000",
    "short": "Yurak og‘rig‘iga tez yordam beruvchi dori.",
    "dose": "100 tabletka",
    "image": "https://livealthbiopharma.com/wp-content/uploads/2025/03/Nitroglycerin-Sublingual-Tablets-USP-0.5-mg.webp"
  },
  {
    "id": 38,
    "name": "Enalapril 5mg",
    "price": "16000",
    "short": "Qon bosimini tushiruvchi dori.",
    "dose": "20 tabletka",
    "image": "https://oxymed.uz/storage/resize_cache/500_500_no_crop___/images/from_file/1721283407_%D1%86%D1%86%D1%86%D1%86%D1%86%D1%86%D1%86%D1%86%D1%86.png"
  },
  {
    "id": 39,
    "name": "Amlodipine 10mg",
    "price": "19000",
    "short": "Yurak qon tomir kasalliklarida qo‘llanadi.",
    "dose": "28 tabletka",
    "image": "https://advantagepharma.africa/wp-content/uploads/2023/10/Amlodipine.png"
  },
  {
    "id": 40,
    "name": "Losartan 25mg",
    "price": "21000",
    "short": "Qon bosimini me’yorda ushlab turadi.",
    "dose": "10 tabletka",
    "image": "https://fastcdn.pro/FileGallery/zagrosdarou.com/%D8%AF%D8%A7%D8%B1%D9%88%D9%87%D8%A7%DB%8C-%DA%A9%D8%A7%D9%87%D9%86%D8%AF%D9%87-%D9%81%D8%B4%D8%A7%D8%B1-%D8%AE%D9%88%D9%86/%D9%84%D9%88%D8%B2%D8%A7%D8%B1%D8%AA%D8%A7%D9%86_25_%D9%85%DB%8C%D9%84%DB%8C_%DA%AF%D8%B1%D9%85/3D-Box-Losartan-25.png"
  },
  {
    "id": 41,
    "name": "Insulin",
    "price": "90000",
    "short": "Qandli diabetda glyukozani nazorat qiladi.",
    "dose": "10ml patron",
    "image": "https://dalimedmc.am/uploads/images/dalimed-49d2b6849b8c0537.webp"
  },
  {
    "id": 42,
    "name": "Salbutamol Inhaler",
    "price": "48000",
    "short": "Astma va nafas qisilishida ishlatiladi.",
    "dose": "200 dozali inhaler",
    "image": "https://cdn.mimsprd.mims.com/drug-resources/ID/packshot/Ventolin%20Inhaler6002PPS0.JPG"
  },
  {
    "id": 43,
    "name": "Efferalgan 1000mg",
    "price": "17000",
    "short": "Isitma va og‘riqlarga qarshi vosita.",
    "dose": "16 tabletka",
    "image": "https://www.upsa.com/wp-content/uploads/2025/07/pack-3d-efferalgan-1000-agrumes-png.png"
  },
  {
    "id": 44,
    "name": "Dexpanthenol Cream",
    "price": "26000",
    "short": "Teri tiklanishini tezlashtiruvchi krem.",
    "dose": "300g tuba",
    "image": "https://kuludonline.com/cdn/shop/files/54845.jpg?v=1746713405"
  },
  {
    "id": 45,
    "name": "Miramistin Spray",
    "price": "32000",
    "short": "Antiseptik vosita, tomoq va yara uchun.",
    "dose": "100ml flakon",
    "image": "https://images.apteka.ru/medium_bf1f6723-ef05-4103-88c2-087d77ab0a15.jpeg"
  },
  {
    "id": 46,
    "name": "Chlorhexidine Solution",
    "price": "15000",
    "short": "Yarani tozalovchi antiseptik eritma.",
    "dose": "4 % flakon",
    "image": "https://image.made-in-china.com/202f0j00aCNoZziKYEuQ/Chlorhexidine-4-Solution-Surgical-Scrub-Hand-Sanitizer-Disinfectant-with-Hosptail.jpg"
  },
  {
    "id": 47,
    "name": "Bepanthen Cream",
    "price": "29000",
    "short": "Teri uchun tiklovchi va yumshatuvchi krem.",
    "dose": "30g tuba",
    "image": "https://life-cdn.lifepharmacy.com/images/products/108415-13.06-1024x1024.jpg"
  },
  {
    "id": 48,
    "name": "Riboxin",
    "price": "23000",
    "short": "Yurak faoliyatini qo‘llab-quvvatlovchi vosita.",
    "dose": "50 tabletka",
    "image": "https://lekhim.ua/sites/default/files/ryboksyn_200_mg_no50_2_0.jpg"
  },
  {
    "id": 49,
    "name": "Ascorutin",
    "price": "18000",
    "short": "Tomir devorlarini mustahkamlovchi vitaminlar majmuasi.",
    "dose": "50 tabletka",
    "image": "https://www.vidal.ru/upload/products/21793-ascorutin-altaivit.jpg"
  },
  {
    "id": 50,
    "name": "Corvalol Drops",
    "price": "14000",
    "short": "Yurak urishida tinchlantiruvchi vosita.",
    "dose": "50ml flakon",
    "image": "https://m.media-amazon.com/images/I/71+hxmlIInL._AC_UF1000,1000_QL80_.jpg"
  },
   {
    "id": 51,
    "name": "Ambroxol Syrup",
    "price": "27000",
    "short": "Yo‘talga qarshi balg‘am ko‘chiruvchi sirop.",
    "dose": "125ml flakon",
    "image": "https://shopsuki.ph/cdn/shop/files/105144756_600x600_crop_center.png?v=1717563755"
  },
  {
    "id": 52,
    "name": "Loratadine 100mg",
    "price": "17000",
    "short": "Allergiya alomatlarini kamaytiruvchi vosita.",
    "dose": "30 tabletka",
    "image": "https://firstaidsuppliesonline.com/wp-content/uploads/2017/12/p-15349-214470_loratadineAllergyTabs_30box-e1722026035520.jpg"
  },
  {
    "id": 53,
    "name": "Drotaverine 40mg",
    "price": "14500",
    "short": "Spazmlarni bartaraf etuvchi dori vosita.",
    "dose": "20 tabletka",
    "image": "https://lekpharm.by/uploads/catalog/drotaverin/drotaverin-40mg-20-moldova.jpg"
  },
  {
    "id": 54,
    "name": "Omeprazole 20mg",
    "price": "21000",
    "short": "Qorin og‘rig‘iga va gastritda qo‘llaniladi.",
    "dose": "20 kapsula",
    "image": "https://res.cloudinary.com/zava-www-uk/image/upload/fl_progressive/a_exif,f_auto,e_sharpen:100,c_fit,w_1080,h_810,q_70,fl_lossy/v1706806290/sd/uk/services-setup/acid-reflux/omeprazole/knh8cjncnq9z5axkil3h.png"
  },
  {
    "id": 55,
    "name": "Nimesil Powder",
    "price": "26000",
    "short": "Yallig‘lanishga qarshi og‘riq qoldiruvchi kukun.",
    "dose": "15 paket",
    "image": "https://m.media-amazon.com/images/I/41nEbw58QuL._AC_UF894,1000_QL80_.jpg"
  },
  {
    "id": 56,
    "name": "Levothyroxine 25mcg",
    "price": "31000",
    "short": "Qalqonsimon bez yetishmovchiligida ishlatiladi.",
    "dose": "28 tabletka",
    "image": "https://media.sciencephoto.com/c0/26/24/51/c0262451-800px-wm.jpg"
  },
  {
    "id": 57,
    "name": "Amoxiclav 2x 125mg",
    "price": "48000",
    "short": "Keng ta’sir doiradagi antibiotik.",
    "dose": " Full complete",
    "image": "https://images.apteka.ru/original_c2e7f093-6753-4f3d-ab41-8e9c884f65e5.png"
  },
  {
    "id": 58,
    "name": "Prednisolone 5mg",
    "price": "23000",
    "short": "Yallig‘lanishga qarshi gormonal vosita.",
    "dose": "28 tabletka",
    "image": "https://www.revolvemedicare.co.uk/wp-content/uploads/2025/01/Screenshot-2023-04-28-at-14.37.54.png"
  },
  {
    "id": 59,
    "name": "Linex Capsules",
    "price": "29000",
    "short": "Ichak mikroflorasini tiklovchi probiotik.",
    "dose": "16 kapsula",
    "image": "https://api.europharm.uz/images/products/00/48/32/c02bbb7a-f276-4a6b-bfd1-55648a96ca4d.jpg"
  },
  {
    "id": 60,
    "name": "Mezim Forte",
    "price": "24000",
    "short": "Ovqat hazm qilishni yaxshilovchi ferment preparat.",
    "dose": "20 tabletka",
    "image": "https://aptekonline.az/storage/ProductImages/5268_1.jpg"
  }


]

// 🔹 Ma’lumotlarni fetch orqali olish funksiyasi
export async function getProducts() {
  try {
    const response = await fetch('/products.json')
    if (!response.ok) throw new Error('Mahsulotlarni yuklashda xatolik!')
    const data = await response.json()
    return data
  } catch (err) {
    console.warn('⚠️ Fetch ishlamadi, local productlar qaytarildi.')
    return products
  }
}

// 🔹 Default eksport (agar siz importda oddiy ishlatsangiz)
export default products
