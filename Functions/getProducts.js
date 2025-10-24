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
    "name": "Amoxicillin 250mg",
    "price": "18500",
    "short": "Bakterial infeksiyalarga qarshi antibiotik.",
    "dose": "20 kapsula",
    "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
  },
  {
    "id": 3,
    "name": "Ibuprofen 200mg",
    "price": "15000",
    "short": "Og‘riq va yallig‘lanishga qarshi vosita.",
    "dose": "30 dona",
    "image": "https://images.unsplash.com/photo-1598514982849-72ce5d66ef91"
  },
  {
    "id": 4,
    "name": "Vitamin C 1000mg",
    "price": "22000",
    "short": "Immunitetni kuchaytiradi va shamollashdan himoya qiladi.",
    "dose": "20 tabletka",
    "image": "https://images.unsplash.com/photo-1609766857052-123bcd4f7358"
  },
  {
    "id": 5,
    "name": "Aspirin 100mg",
    "price": "9500",
    "short": "Qon aylanishini yaxshilovchi va og‘riqni kamaytiruvchi.",
    "dose": "10 tabletka",
    "image": "https://images.unsplash.com/photo-1606813902794-7d2b6b9ad6a3"
  },
  {
    "id": 6,
    "name": "Panadol Extra",
    "price": "14000",
    "short": "Bosh va tish og‘rig‘ini kamaytiruvchi dori.",
    "dose": "12 dona",
    "image": "https://images.unsplash.com/photo-1606811840964-437a3a7f6a10"
  },
  {
    "id": 7,
    "name": "No-Spa 40mg",
    "price": "11500",
    "short": "Mushak spazmlari va og‘riqlarga qarshi dori.",
    "dose": "6 tabletka",
    "image": "https://images.unsplash.com/photo-1615052016251-2291b8a3afdf"
  },
  {
    "id": 8,
    "name": "Zinc + Vitamin D3",
    "price": "25000",
    "short": "Immunitetni qo‘llab-quvvatlaydi.",
    "dose": "30 kapsula",
    "image": "https://images.unsplash.com/photo-1615052066273-7bb25b7caa63"
  },
  {
    "id": 9,
    "name": "Nurofen Forte",
    "price": "17000",
    "short": "Issiqlik va og‘riqqa qarshi samarali vosita.",
    "dose": "12 tabletka",
    "image": "https://images.unsplash.com/photo-1613553492798-4c1d9cb4c2c3"
  },
  {
    "id": 10,
    "name": "Claritin 10mg",
    "price": "27000",
    "short": "Allergiya belgilari uchun antihistamin.",
    "dose": "10 dona",
    "image": "https://images.unsplash.com/photo-1611162617213-7d7b3a3adbf8"
  },
  {
    "id": 11,
    "name": "Loratadine",
    "price": "23000",
    "short": "Burun bitishi va allergiyaga qarshi dori.",
    "dose": "10 tabletka",
    "image": "https://images.unsplash.com/photo-1622227922683-4ee1e3ad05a2"
  },
  {
    "id": 12,
    "name": "Omeprazole 20mg",
    "price": "16000",
    "short": "Oshqozon kislotasini kamaytiruvchi dori.",
    "dose": "14 kapsula",
    "image": "https://images.unsplash.com/photo-1595433707802-8d5aeea2d76a"
  },
  {
    "id": 13,
    "name": "Azithromycin 500mg",
    "price": "35000",
    "short": "Keng ta’sir doirasiga ega antibiotik.",
    "dose": "6 tabletka",
    "image": "https://images.unsplash.com/photo-1588776814546-ec07b3e8d2b5"
  },
  {
    "id": 14,
    "name": "Ceftriaxone",
    "price": "28000",
    "short": "In’eksiya uchun antibiotik vosita.",
    "dose": "1 flakon",
    "image": "https://images.unsplash.com/photo-1615461066841-7d8df27f1dff"
  },
  {
    "id": 15,
    "name": "Hydrocortisone Cream",
    "price": "24000",
    "short": "Teri yallig‘lanishiga qarshi krem.",
    "dose": "20g tuba",
    "image": "https://images.unsplash.com/photo-1588776814546-ec07b3e8d2b5"
  },
  {
    "id": 16,
    "name": "Cetirizine 10mg",
    "price": "18000",
    "short": "Allergiyaga qarshi antihistamin tabletkasi.",
    "dose": "10 tabletka",
    "image": "https://images.unsplash.com/photo-1611162617121-7d7b3a3adbf8"
  },
  {
    "id": 17,
    "name": "Metformin 500mg",
    "price": "20000",
    "short": "Qandli diabet uchun dori vosita.",
    "dose": "30 tabletka",
    "image": "https://images.unsplash.com/photo-1586015555268-04aa36f5d8f9"
  },
  {
    "id": 18,
    "name": "Captopril 25mg",
    "price": "13000",
    "short": "Qon bosimini pasaytiruvchi vosita.",
    "dose": "20 tabletka",
    "image": "https://images.unsplash.com/photo-1606811840964-437a3a7f6a10"
  },
  {
    "id": 19,
    "name": "Furosemide 40mg",
    "price": "15500",
    "short": "Siydik haydovchi dori, yurak shishlariga qarshi.",
    "dose": "10 tabletka",
    "image": "https://images.unsplash.com/photo-1615052066273-7bb25b7caa63"
  },
  {
    "id": 20,
    "name": "Prednisolone 5mg",
    "price": "19000",
    "short": "Yallig‘lanishga qarshi gormonal dori.",
    "dose": "10 tabletka",
    "image": "https://images.unsplash.com/photo-1615052016251-2291b8a3afdf"
  },
  {
    "id": 21,
    "name": "Ranitidine 150mg",
    "price": "17000",
    "short": "Oshqozon kislotasini kamaytiruvchi vosita.",
    "dose": "20 tabletka",
    "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
  },
  {
    "id": 22,
    "name": "Drotaverine 40mg",
    "price": "12000",
    "short": "Spazmlarni bartaraf etuvchi tabletkalar.",
    "dose": "12 dona",
    "image": "https://images.unsplash.com/photo-1598514982849-72ce5d66ef91"
  },
  {
    "id": 23,
    "name": "Loperamide 2mg",
    "price": "14500",
    "short": "Ich ketishga qarshi vosita.",
    "dose": "10 kapsula",
    "image": "https://images.unsplash.com/photo-1613553492798-4c1d9cb4c2c3"
  },
  {
    "id": 24,
    "name": "Activated Charcoal",
    "price": "10000",
    "short": "Zaharli moddalarni chiqaruvchi adsorbent.",
    "dose": "20 tabletka",
    "image": "https://images.unsplash.com/photo-1606813902794-7d2b6b9ad6a3"
  },
  {
    "id": 25,
    "name": "Linex Forte",
    "price": "27000",
    "short": "Ichak mikroflorasini tiklovchi probiotik.",
    "dose": "14 kapsula",
    "image": "https://images.unsplash.com/photo-1606811840964-437a3a7f6a10"
  },
  {
    "id": 26,
    "name": "Mezim Forte",
    "price": "24000",
    "short": "Ovqat hazm qilishga yordam beruvchi ferment.",
    "dose": "20 tabletka",
    "image": "https://images.unsplash.com/photo-1588776814546-ec07b3e8d2b5"
  },
  {
    "id": 27,
    "name": "Omez 20mg",
    "price": "21000",
    "short": "Oshqozon qichishini kamaytiruvchi vosita.",
    "dose": "10 kapsula",
    "image": "https://images.unsplash.com/photo-1586015555268-04aa36f5d8f9"
  },
  {
    "id": 28,
    "name": "Ambroxol Syrup",
    "price": "18000",
    "short": "Yo‘talni yumshatuvchi sirop.",
    "dose": "100 ml shisha",
    "image": "https://images.unsplash.com/photo-1609766857052-123bcd4f7358"
  },
  {
    "id": 29,
    "name": "Bromhexine 8mg",
    "price": "17000",
    "short": "Balg‘am ko‘chirishni osonlashtiruvchi dori.",
    "dose": "10 tabletka",
    "image": "https://images.unsplash.com/photo-1622227922683-4ee1e3ad05a2"
  },
  {
    "id": 30,
    "name": "ACC 200mg",
    "price": "26000",
    "short": "Yo‘talga qarshi shilliqni erituvchi vosita.",
    "dose": "10 paket",
    "image": "https://images.unsplash.com/photo-1595433707802-8d5aeea2d76a"
  },
   {
    "id": 31,
    "name": "Suprastin 25mg",
    "price": "19000",
    "short": "Allergiyaga qarshi antihistamin vosita.",
    "dose": "20 tabletka",
    "image": "https://images.unsplash.com/photo-1611162617121-7d7b3a3adbf8"
  },
  {
    "id": 32,
    "name": "Dexamethasone",
    "price": "23000",
    "short": "Yallig‘lanish va allergiyaga qarshi gormonal dori.",
    "dose": "10 ampula",
    "image": "https://images.unsplash.com/photo-1615461066841-7d8df27f1dff"
  },
  {
    "id": 33,
    "name": "Hydroxychloroquine 200mg",
    "price": "45000",
    "short": "Autoimmun kasalliklar uchun dori vosita.",
    "dose": "30 tabletka",
    "image": "https://images.unsplash.com/photo-1588776814546-ec07b3e8d2b5"
  },
  {
    "id": 34,
    "name": "Diclofenac Gel",
    "price": "27000",
    "short": "Tashqi qo‘llanadigan og‘riqqa qarshi gel.",
    "dose": "50g tuba",
    "image": "https://images.unsplash.com/photo-1613553492798-4c1d9cb4c2c3"
  },
  {
    "id": 35,
    "name": "Ketorol 10mg",
    "price": "20000",
    "short": "Kuchli og‘riqlarga qarshi tabletkalar.",
    "dose": "10 tabletka",
    "image": "https://images.unsplash.com/photo-1622227922683-4ee1e3ad05a2"
  },
  {
    "id": 36,
    "name": "Tramadol 50mg",
    "price": "31000",
    "short": "Og‘riqni kamaytiruvchi kuchli vosita.",
    "dose": "10 kapsula",
    "image": "https://images.unsplash.com/photo-1586015555268-04aa36f5d8f9"
  },
  {
    "id": 37,
    "name": "Nitroglycerin",
    "price": "18000",
    "short": "Yurak og‘rig‘iga tez yordam beruvchi dori.",
    "dose": "10 tabletka",
    "image": "https://images.unsplash.com/photo-1606813902794-7d2b6b9ad6a3"
  },
  {
    "id": 38,
    "name": "Enalapril 5mg",
    "price": "16000",
    "short": "Qon bosimini tushiruvchi dori.",
    "dose": "20 tabletka",
    "image": "https://images.unsplash.com/photo-1615052066273-7bb25b7caa63"
  },
  {
    "id": 39,
    "name": "Amlodipine 10mg",
    "price": "19000",
    "short": "Yurak qon tomir kasalliklarida qo‘llanadi.",
    "dose": "10 tabletka",
    "image": "https://images.unsplash.com/photo-1615052016251-2291b8a3afdf"
  },
  {
    "id": 40,
    "name": "Losartan 50mg",
    "price": "21000",
    "short": "Qon bosimini me’yorda ushlab turadi.",
    "dose": "10 tabletka",
    "image": "https://images.unsplash.com/photo-1611162617213-7d7b3a3adbf8"
  },
  {
    "id": 41,
    "name": "Insulin Pen",
    "price": "90000",
    "short": "Qandli diabetda glyukozani nazorat qiladi.",
    "dose": "3ml patron",
    "image": "https://images.unsplash.com/photo-1622227915342-8e184d947734"
  },
  {
    "id": 42,
    "name": "Salbutamol Inhaler",
    "price": "48000",
    "short": "Astma va nafas qisilishida ishlatiladi.",
    "dose": "200 dozali inhaler",
    "image": "https://images.unsplash.com/photo-1609766857052-123bcd4f7358"
  },
  {
    "id": 43,
    "name": "Efferalgan 500mg",
    "price": "17000",
    "short": "Isitma va og‘riqlarga qarshi vosita.",
    "dose": "16 tabletka",
    "image": "https://images.unsplash.com/photo-1598514982849-72ce5d66ef91"
  },
  {
    "id": 44,
    "name": "Dexpanthenol Cream",
    "price": "26000",
    "short": "Teri tiklanishini tezlashtiruvchi krem.",
    "dose": "30g tuba",
    "image": "https://images.unsplash.com/photo-1615461066841-7d8df27f1dff"
  },
  {
    "id": 45,
    "name": "Miramistin Spray",
    "price": "32000",
    "short": "Antiseptik vosita, tomoq va yara uchun.",
    "dose": "100ml flakon",
    "image": "https://images.unsplash.com/photo-1613553492798-4c1d9cb4c2c3"
  },
  {
    "id": 46,
    "name": "Chlorhexidine Solution",
    "price": "15000",
    "short": "Yarani tozalovchi antiseptik eritma.",
    "dose": "200ml flakon",
    "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
  },
  {
    "id": 47,
    "name": "Bepanthen Cream",
    "price": "29000",
    "short": "Teri uchun tiklovchi va yumshatuvchi krem.",
    "dose": "50g tuba",
    "image": "https://images.unsplash.com/photo-1588776814546-ec07b3e8d2b5"
  },
  {
    "id": 48,
    "name": "Riboxin",
    "price": "23000",
    "short": "Yurak faoliyatini qo‘llab-quvvatlovchi vosita.",
    "dose": "50 tabletka",
    "image": "https://images.unsplash.com/photo-1611162617121-7d7b3a3adbf8"
  },
  {
    "id": 49,
    "name": "Ascorutin",
    "price": "18000",
    "short": "Tomir devorlarini mustahkamlovchi vitaminlar majmuasi.",
    "dose": "50 tabletka",
    "image": "https://images.unsplash.com/photo-1622227922683-4ee1e3ad05a2"
  },
  {
    "id": 50,
    "name": "Corvalol Drops",
    "price": "14000",
    "short": "Yurak urishida tinchlantiruvchi vosita.",
    "dose": "25ml flakon",
    "image": "https://images.unsplash.com/photo-1606811840964-437a3a7f6a10"
  },
   {
    "id": 51,
    "name": "Ambroxol Syrup",
    "price": "27000",
    "short": "Yo‘talga qarshi balg‘am ko‘chiruvchi sirop.",
    "dose": "100ml flakon",
    "image": "https://images.unsplash.com/photo-1606208215971-3f3cddf3c6b7"
  },
  {
    "id": 52,
    "name": "Loratadine 10mg",
    "price": "17000",
    "short": "Allergiya alomatlarini kamaytiruvchi vosita.",
    "dose": "10 tabletka",
    "image": "https://images.unsplash.com/photo-1598532515554-1539a5b7f43b"
  },
  {
    "id": 53,
    "name": "Drotaverine 40mg",
    "price": "14500",
    "short": "Spazmlarni bartaraf etuvchi dori vosita.",
    "dose": "20 tabletka",
    "image": "https://images.unsplash.com/photo-1626899798511-1ed27aefb1a9"
  },
  {
    "id": 54,
    "name": "Omeprazole 20mg",
    "price": "21000",
    "short": "Qorin og‘rig‘iga va gastritda qo‘llaniladi.",
    "dose": "14 kapsula",
    "image": "https://images.unsplash.com/photo-1618911364976-3b7f8b4d9d53"
  },
  {
    "id": 55,
    "name": "Nimesil Powder",
    "price": "26000",
    "short": "Yallig‘lanishga qarshi og‘riq qoldiruvchi kukun.",
    "dose": "10 paket",
    "image": "https://images.unsplash.com/photo-1615052015846-8b4c6fdf9b2e"
  },
  {
    "id": 56,
    "name": "Levothyroxine 50mcg",
    "price": "31000",
    "short": "Qalqonsimon bez yetishmovchiligida ishlatiladi.",
    "dose": "30 tabletka",
    "image": "https://images.unsplash.com/photo-1615461066641-02d2d6e31216"
  },
  {
    "id": 57,
    "name": "Amoxiclav 875mg",
    "price": "48000",
    "short": "Keng ta’sir doiradagi antibiotik.",
    "dose": "14 tabletka",
    "image": "https://images.unsplash.com/photo-1588776814546-ec07b3e8d2b5"
  },
  {
    "id": 58,
    "name": "Prednisolone 5mg",
    "price": "23000",
    "short": "Yallig‘lanishga qarshi gormonal vosita.",
    "dose": "30 tabletka",
    "image": "https://images.unsplash.com/photo-1622227922683-4ee1e3ad05a2"
  },
  {
    "id": 59,
    "name": "Linex Capsules",
    "price": "29000",
    "short": "Ichak mikroflorasini tiklovchi probiotik.",
    "dose": "16 kapsula",
    "image": "https://images.unsplash.com/photo-1613553492798-4c1d9cb4c2c3"
  },
  {
    "id": 60,
    "name": "Mezim Forte",
    "price": "24000",
    "short": "Ovqat hazm qilishni yaxshilovchi ferment preparat.",
    "dose": "20 tabletka",
    "image": "https://images.unsplash.com/photo-1615052066273-7bb25b7caa63"
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
