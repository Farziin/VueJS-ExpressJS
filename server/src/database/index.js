const config = require('../config/config')
const mongodb = require('mongodb')
const url = config.db.options.host + ':' + config.db.options.port

const mongoClient = mongodb.MongoClient
var database = null
module.exports = {
  /* connect to database */
  async connect () {
    await mongoClient.connect(url, function (err, db) {
      if (err) throw err
      console.log('CONNECT TO DATABASE!')
      database = db.db(config.db.database)
      database.createCollection('movie', function (err) {
        if (err) throw err
        console.log('MOVIE COLLECTION CREATED!')
      })
      database.createCollection('comment', function (err) {
        if (err) throw err
        console.log('COMMENT COLLECTION CREATED!')
      })
      return database
    })
  },

  /* getter for database object */
  get () {
    return database
  },

  /* insert data into database */
  insert () {
    const movies = [
      {
        _id: 1,
        created_at: new Date(Date.now()).toISOString(),
        title: 'فیلم دیوانگی',
        original_title: 'Delirium',
        rate: 3.5,
        year: 2018,
        length: '100 دقیقه',
        language: 'انگلیسی',
        country: 'ایالات متحده آمریکا',
        description: 'یک مرد جوان شجاعتش را برای رسیدن به یک خانه ظاهرا خالی از سکنه به چالش می کشد. اما وقتی که او از آنجا بر نمی گردد، دوستانش  پس از او وارد می شوند. آنها اکتشافات وحشتناکی در مورد تاریخ خشونت آمیز این خانه پیدا می کنند...',
        director: 'Johnny Martin',
        writer: 'Francisco Castro , Andy Cheng , Lisa Clemens',
        stars: 'Ryan Pinkston , Elena Sanchez , Mike C. Manning',
        category: 'ترسناک هیجان‌انگیز',
        color: '#754d44'
      },
      {
        _id: 2,
        created_at: new Date(Date.now()).toISOString(),
        title: 'فیلم روابط دوستانه',
        original_title: 'The Relationship',
        rate: 8.8,
        year: 2017,
        length: '90 دقیقه',
        language: 'انگلیسی',
        country: 'ایالات متحده آمریکا',
        description: '“بِک” و “لیام” کسانی هستند که تنها بودن را ترجیح می‌دهند و پس از رسیدن به بی‌طرفی متقابل در رابطه‌شان، تصمیم می‌گیرند که با هم سفری "دوستانه" را شروع کنند...',
        director: 'C.A. Gabriel , Renée Felice Smith',
        writer: 'C.A. Gabriel , Renée Felice Smith , Dana Scanlon',
        stars: 'Renée Felice Smith , Matt Bush , Nelson Franklin',
        category: 'کمدی',
        color: '#ad203d'
      },
      {
        _id: 3,
        created_at: new Date(Date.now()).toISOString(),
        title: 'فیلم پناهگاه',
        original_title: 'Storozhova Zastava',
        rate: 7.5,
        year: 2017,
        length: '111 دقیقه',
        language: 'اوکراین',
        country: 'اوکراین',
        description: 'ویتکو ، دانش آموز مدرسه امروزی است ، او 1000 سال به گذشته بر میگردد، جایی که او باید صورت سحر سیاه و ارتش را در مقابل هیولا سنگ بزرگ رهبری کند...',
        director: 'Yuriy Kovalyov',
        writer: 'Oleksandr Dermanskyi , Yuriy Kovalyov , Yaroslav Voytseshek',
        stars: 'Ivan Denysenko , Georgi Derevyanskyi , Daniil Kamenskyi',
        category: 'فانتزی',
        color: '#2066ad'
      },
      {
        _id: 4,
        created_at: new Date(Date.now()).toISOString(),
        title: 'فیلم رفت و آمد',
        original_title: 'The Commuter',
        rate: 6.5,
        year: 2018,
        length: '105 دقیقه',
        language: 'انگلیسی',
        country: 'انگلستان , ایالات متحده',
        description: 'مایکل (لیام نیسن) بازرگانی است که در یک قطار در حال حرکت به سمت خانه خود میباشد و با یک فرد مرموز و غریبه یک قرارداد تجاری میبندد. این در حالی است که در میانه راه او درمی‌یابد این قرارداد، توطئه‌ای بیش نیست و جان همه مسافران قطار را تهدید می‌کند. از همین رو، خود دست به کا...',
        director: 'Jaume Collet-Serra',
        writer: 'Byron Willinger , Philip de Blasi , Ryan Engle',
        stars: 'Liam Neeson , Vera Farmiga , Patrick Wilson',
        category: 'جنایی درام رازآلود',
        color: '#c91818'
      },
      {
        _id: 5,
        created_at: new Date(Date.now()).toISOString(),
        title: 'فیلم تقریبا دوستان',
        original_title: 'Almost Friends',
        rate: 6.4,
        year: 2016,
        length: '101 دقیقه',
        language: 'انگلیسی',
        country: 'ایالات متحده',
        description: 'چارلی زمانی یک سرآشپز متعهد بود ، اکنون بدون انگیزه و در خانه با مادرش زندگی می کند، و به عنوان دستیار مدیر فیلمبرداری می شود. اما هنگامی که او با دختر رویاهایش ملاقات می کند و پدرش برمیگردد ، او تلاش می کند تا مشخص کند که چه می خواهد...',
        director: 'Jake Goldberger',
        writer: 'Jake Goldberger',
        stars: 'Freddie Highmore , Odeya Rush , Christopher Meloni',
        category: 'درام کمدی',
        color: '#11a7c1'
      },
      {
        _id: 6,
        created_at: new Date(Date.now()).toISOString(),
        title: 'فیلم زندگی امیل زولا',
        original_title: 'The Life Of Emile Zola',
        rate: 7.3,
        year: 1937,
        length: '116 دقیقه',
        language: 'انگلیسی',
        country: 'ایالات متحده',
        description: 'فیلم داستان زندگی نویسنده مشهور فرانسوی "امیل زولا" را به تصویر می کشد...',
        director: 'William Dieterle',
        writer: 'Norman Reilly Raine , Heinz Herald , Geza Herczeg',
        stars: 'Paul Muni , Gale Sondergaard , Joseph Schildkraut',
        category: 'درام زندگی‌نامه',
        color: '#d8e03a'
      },
      {
        _id: 7,
        created_at: new Date(Date.now()).toISOString(),
        title: 'فیلم ثور: راگناروک',
        original_title: 'Thor: Ragnarok',
        rate: 8.1,
        year: 2017,
        length: '130 دقیقه',
        language: 'انگلیسی',
        country: 'ایالات متحده',
        description: 'ثور راگناروک ، فیلمی اکشن و فانتزی به کارگردانی تایکا وایتیتی هست. اتفاقات فیلم پس از حوادث فیلم انتقام‌جویان عصر اولتران جریان دارد. ثور مجبور است تا در یک نبرد گلادیاتوری با هالک ، مردمش را از ظلم شخصیت شرور این قسمت هلا نجات دهد. اما...',
        director: 'Taika Waititi',
        writer: 'Eric Pearson , Craig Kyle , Christopher Yost',
        stars: 'Chris Hemsworth , Tom Hiddleston , Cate Blanchett',
        category: 'اکشن فانتزی ماجراجویی',
        color: '#dae509'
      },
      {
        _id: 8,
        created_at: new Date(Date.now()).toISOString(),
        title: 'فیلم ال‌.بی.جی',
        original_title: 'LBJ',
        rate: 6.0,
        year: 2016,
        length: '98 دقیقه',
        language: 'انگلیسی',
        country: 'ایالات متحده آمریکا',
        description: 'فیلم داستان زندگی لیندون بی جانسون ( وودی هارلسون ) ، روز های جوانی او در غرب تگزاس تا زمانی که از یک رهبر قاطع سنا که توسط حداکثریت آرا انتخاب شده بود به یک معاون رئیس جمهور ضعیف تبدیل می شود را روایت می کند...',
        director: 'Rob Reiner',
        writer: 'Joey Hartstone',
        stars: 'Jennifer Jason Leigh , Bill Pullman , Woody Harrelson',
        category: 'درام زندگی‌نامه',
        color: '#a99663'
      },
      {
        _id: 9,
        created_at: new Date(Date.now()).toISOString(),
        title: 'فیلم میز',
        original_title: 'Maze',
        rate: 6.5,
        year: 2017,
        length: '92 دقیقه',
        language: 'انگلیسی',
        country: 'انگلستان , ایرلند , سوئد , آلمان',
        description: 'این فیلم براساس حوادث واقعی است که داستان فرار 38 زندانی ایرلندی جمهوریخواه از زندان "مِیز" در ایرلند شمالی در سال 1983 را نشان می دهد که بعد از جنگ جهانی دوم، بزرگترین فرار زندان در اروپا بود...',
        director: 'Stephen Burke',
        writer: 'Stephen Burke',
        stars: 'Tom Vaughan-Lawlor , Barry Ward , Martin McCann',
        category: 'درام رازآلود ماجراجویی',
        color: '#92aa64'
      },
      {
        _id: 10,
        created_at: new Date(Date.now()).toISOString(),
        title: 'فیلم گینتاما',
        original_title: 'Gintama',
        rate: 6.5,
        year: 2017,
        length: '131 دقیقه',
        language: 'ژاپنی',
        country: 'ژاپن',
        description: 'در دوره زمانی که بیگانگان به توکیو حمله کرده ، یک سامورایی جوان پیدا می شود که می تواند آنجا را نجات دهد...',
        director: 'Yûichi Fukuda',
        writer: 'Hideaki Sorachi , Yûichi Fukuda',
        stars: 'Shun Oguri , Kôichi Yamadera , Takayuki Yamada',
        category: 'اکشن کمدی ماجراجویی',
        color: '#ce2b98'
      },
      {
        _id: 11,
        created_at: new Date(Date.now()).toISOString(),
        title: 'فیلم هوادار',
        original_title: 'Tha Fan',
        rate: 5.8,
        year: 1996,
        length: '116 دقیقه',
        language: 'انگلیسی , اسپانیایی',
        country: 'ایالات متحده آمریکا',
        description: '«گیل رنارد» (دنیرو) فروشنده ای است که در زندگی شخصی و حرفه ای اش شکست خورده. او کشته مرده بیس بال است و تمام وقتش را صرف دنبال کردن بازیکن مورد علاقه اش، «بابی ریبرن» (اسنایپس) می کند. «بابی» فصل ورزشی بدی را آغاز می کند و تمام افتخارات به بازیکن دیگری به نام «پریمو» (دل ...',
        director: 'Tony Scott',
        writer: 'Peter Abrahams , Phoef Sutton',
        stars: 'Robert De Niro , Wesley Snipes , Ellen Barkin',
        category: 'اکشن درام ورزشی',
        color: '#ce2a46'
      }
    ]
    database.createCollection('movie', function (err, res) {
      if (err) throw err
      res.insertMany(movies, function (err, res) {
        if (err) throw err
        console.log('INSERTED ' + res.insertedCount + ' ROW INTO MOVIE COLLECTION!')
      })
    })
  }
}
