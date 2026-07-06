/* ========================================================
   بين قلبين – لعبة التوافق الزوجي | بين قلبين من خيركم
   Premium Arabic Relationship Card Game Database & JS Logic
   ======================================================== */

// ========================================================
// 120 UNIQUE ARABIC QUESTIONS DATABASE (24 per category)
// ========================================================
const CARD_DECK = [
  // ------------------------------------------------------
  // ❤️ Know Your Partner (Soft Rose) - عرف شريكك (1-24)
  // ------------------------------------------------------
  {
    id: 1,
    category: "rose",
    categoryAr: "عرف شريكك",
    icon: "❤️",
    question: "ما هو الشيء الصغير الذي أفعله يومياً ويجعلك تبتسم؟",
    meta: "التفاصيل اليومية البسيطة"
  },
  {
    id: 2,
    category: "rose",
    categoryAr: "عرف شريكك",
    icon: "❤️",
    question: "كيف تبدو نهاية اليوم المثالية بالنسبة لك بعد يوم عمل شاق؟",
    meta: "الراحة والاسترخاء"
  },
  {
    id: 3,
    category: "rose",
    categoryAr: "عرف شريكك",
    icon: "❤️",
    question: "إذا سنحت لك فرصة تعلم مهارة أو هواية جديدة تماماً، فماذا ستختار؟",
    meta: "الاهتمامات والهوايات"
  },
  {
    id: 4,
    category: "rose",
    categoryAr: "عرف شريكك",
    icon: "❤️",
    question: "ما هي الأكلة التي تشعرك بالدفء وتذكرك بطفولتك؟",
    meta: "ذكريات الطفولة والمذاق"
  },
  {
    id: 5,
    category: "rose",
    categoryAr: "عرف شريكك",
    icon: "❤️",
    question: "من هو الشخص الأكثر تأثيراً في تكوين شخصيتك الحالية؟",
    meta: "القدوة والتأثير"
  },
  {
    id: 6,
    category: "rose",
    categoryAr: "عرف شريكك",
    icon: "❤️",
    question: "ما هي العادة اليومية التي تتمنى أن تتخلص منها قريباً؟",
    meta: "تطوير الذات"
  },
  {
    id: 7,
    category: "rose",
    categoryAr: "عرف شريكك",
    icon: "❤️",
    question: "ما هو المكان الذي تشعر فيه بالطمأنينة الكاملة والهدوء؟",
    meta: "ملاذ الأمان"
  },
  {
    id: 8,
    category: "rose",
    categoryAr: "عرف شريكك",
    icon: "❤️",
    question: "ما هو الخوف الأكبر الذي يراودك وتتمنى تجاوزه؟",
    meta: "المخاوف العميقة"
  },
  {
    id: 9,
    category: "rose",
    categoryAr: "عرف شريكك",
    icon: "❤️",
    question: "لو كان بإمكانك تغيير شيء واحد في جدولنا اليومي، فماذا سيكون؟",
    meta: "تنظيم الحياة اليومية"
  },
  {
    id: 10,
    category: "rose",
    categoryAr: "عرف شريكك",
    icon: "❤️",
    question: "ما هو الكتاب أو الفيلم الذي أثر في نظرتك للحياة بشكل كبير؟",
    meta: "الثقافة والأفكار"
  },
  {
    id: 11,
    category: "rose",
    categoryAr: "عرف شريكك",
    icon: "❤️",
    question: "ما هو الفصل المفضل لديك في السنة، ولماذا؟",
    meta: "الفصول والأجواء"
  },
  {
    id: 12,
    category: "rose",
    categoryAr: "عرف شريكك",
    icon: "❤️",
    question: "هل تفضل الهدايا ذات القيمة المادية العالية أم القيمة العاطفية اليدوية؟",
    meta: "أسلوب الهدايا"
  },
  {
    id: 13,
    category: "rose",
    categoryAr: "عرف شريكك",
    icon: "❤️",
    question: "ما هو الصوت أو الرائحة التي تشعرك بالراحة والسكينة فوراً؟",
    meta: "المؤثرات الحسية"
  },
  {
    id: 14,
    category: "rose",
    categoryAr: "عرف شريكك",
    icon: "❤️",
    question: "ما الذي يقلقك أكثر بشأن تقدمنا في العمر؟",
    meta: "المستقبل والنضج"
  },
  {
    id: 15,
    category: "rose",
    categoryAr: "عرف شريكك",
    icon: "❤️",
    question: "إذا تملكك الغضب أو الحزن، فهل تفضل البقاء وحيداً أم تتحدث معي فوراً؟",
    meta: "إدارة المشاعر"
  },
  {
    id: 16,
    category: "rose",
    categoryAr: "عرف شريكك",
    icon: "❤️",
    question: "ما هو الشيء الذي تعتبره أعظم إنجاز شخصي حققته حتى الآن؟",
    meta: "الإنجازات الفخرية"
  },
  {
    id: 17,
    category: "rose",
    categoryAr: "عرف شريكك",
    icon: "❤️",
    question: "ما هي العادة المنزلية التي أقوم بها وتجدها غريبة أو طريفة؟",
    meta: "العادات الطريفة"
  },
  {
    id: 18,
    category: "rose",
    categoryAr: "عرف شريكك",
    icon: "❤️",
    question: "هل تعتبر نفسك شخصاً عقلانياً يخطط لكل شيء أم عفوياً يتبع مشاعره؟",
    meta: "نوع الشخصية"
  },
  {
    id: 19,
    category: "rose",
    categoryAr: "عرف شريكك",
    icon: "❤️",
    question: "ما هي الكلمة المفضلة لديك التي تحب أن تسمعها مني دائماً؟",
    meta: "الاتصال اللفظي"
  },
  {
    id: 20,
    category: "rose",
    categoryAr: "عرف شريكك",
    icon: "❤️",
    question: "ما هو الحلم القديم من طفولتك الذي لم تحققه بعد وتتمنى السعي وراءه؟",
    meta: "أحلام الطفولة"
  },
  {
    id: 21,
    category: "rose",
    categoryAr: "عرف شريكك",
    icon: "❤️",
    question: "كيف تقيم مستوى طاقتك الاجتماعية؛ هل تفضل الجمعات الكبيرة أم الجلسات الهادئة؟",
    meta: "البيئة الاجتماعية"
  },
  {
    id: 22,
    category: "rose",
    categoryAr: "عرف شريكك",
    icon: "❤️",
    question: "ما هو الأمر الذي إذا قمت به تشعر بأنك تفرغ شحنات التوتر والضغط؟",
    meta: "إزالة التوتر"
  },
  {
    id: 23,
    category: "rose",
    categoryAr: "عرف شريكك",
    icon: "❤️",
    question: "إذا أتيحت لك فرصة العيش في بلد آخر لمدة عام، فأي بلد ستختار؟",
    meta: "أحلام السفر"
  },
  {
    id: 24,
    category: "rose",
    categoryAr: "عرف شريكك",
    icon: "❤️",
    question: "ما هو التصرف الذي أفعله ويشعرك بالاحترام الشديد والتقدير؟",
    meta: "الاحترام المتبادل"
  },

  // ------------------------------------------------------
  // 💬 Heart Language (Sky Blue) - لغة القلب (25-48)
  // ------------------------------------------------------
  {
    id: 25,
    category: "blue",
    categoryAr: "لغة القلب",
    icon: "💬",
    question: "متى تشعر بأنك محبوب ومحاط برعايتي بأقصى درجة؟",
    meta: "الشعور بالحب"
  },
  {
    id: 26,
    category: "blue",
    categoryAr: "لغة القلب",
    icon: "💬",
    question: "ما هي طريقة الاعتذار المفضلة لديك عندما يحدث خلاف بيننا؟",
    meta: "الاعتذار والإصلاح"
  },
  {
    id: 27,
    category: "blue",
    categoryAr: "لغة القلب",
    icon: "💬",
    question: "كيف تفضل أن أعبر لك عن امتناني وتقديري لجهودك في حياتنا؟",
    meta: "التقدير والامتنان"
  },
  {
    id: 28,
    category: "blue",
    categoryAr: "لغة القلب",
    icon: "💬",
    question: "هل تشعر بأننا نقضي وقتاً ذا جودة (بدون شاشات) كافياً معاً؟",
    meta: "الوقت الجيد"
  },
  {
    id: 29,
    category: "blue",
    categoryAr: "لغة القلب",
    icon: "💬",
    question: "ما هي اللمسة الجسدية العفوية التي تشعرك بالطمأنينة فوراً؟",
    meta: "اللمسة الحانية"
  },
  {
    id: 30,
    category: "blue",
    categoryAr: "لغة القلب",
    icon: "💬",
    question: "ما هي العبارة التشجيعية التي قلتها لك سابقاً وظلت عالقة في ذهنك؟",
    meta: "كلمات التأكيد"
  },
  {
    id: 31,
    category: "blue",
    categoryAr: "لغة القلب",
    icon: "💬",
    question: "كيف يمكنني مساعدتك بشكل عملي عندما تكون مضغوطاً في العمل؟",
    meta: "أعمال الخدمة"
  },
  {
    id: 32,
    category: "blue",
    categoryAr: "لغة القلب",
    icon: "💬",
    question: "هل تفضل أن نتشارك في حل جميع المشكلات أم تفضل حل بعضها بمفردك؟",
    meta: "المشاركة والاستقلالية"
  },
  {
    id: 33,
    category: "blue",
    categoryAr: "لغة القلب",
    icon: "💬",
    question: "ما هو السلوك الذي إذا صدر مني دون قصد يجعلك تشعر بعدم الاهتمام؟",
    meta: "الوعي العاطفي"
  },
  {
    id: 34,
    category: "blue",
    categoryAr: "لغة القلب",
    icon: "💬",
    question: "كيف تصف توازن رصيدنا العاطفي الحالي في بنك العلاقة؟",
    meta: "الرصيد العاطفي"
  },
  {
    id: 35,
    category: "blue",
    categoryAr: "لغة القلب",
    icon: "💬",
    question: "ما هو الشيء الذي ترغب في أن أثني عليه أمام الآخرين؟",
    meta: "التقدير أمام الآخرين"
  },
  {
    id: 36,
    category: "blue",
    categoryAr: "لغة القلب",
    icon: "💬",
    question: "ما هي طريقتك المثالية للتعبير عن مشاعر العاطفة عندما تجد صعوبة في الكلام؟",
    meta: "التعبير الصامت"
  },
  {
    id: 37,
    category: "blue",
    categoryAr: "لغة القلب",
    icon: "💬",
    question: "كيف ترى جودة استماعنا لبعضنا البعض أثناء النقاشات الهامة؟",
    meta: "مهارة الاستماع"
  },
  {
    id: 38,
    category: "blue",
    categoryAr: "لغة القلب",
    icon: "💬",
    question: "ما هي الهدية البسيطة التي يمكنني إهداؤها لك لتغيير مزاجك للأفضل؟",
    meta: "لغة الهدايا"
  },
  {
    id: 39,
    category: "blue",
    categoryAr: "لغة القلب",
    icon: "💬",
    question: "عندما أكون حزيناً، ما هي الطريقة التي تعتقد أنها الأفضل لمواساتي؟",
    meta: "المواساة والتعاطف"
  },
  {
    id: 40,
    category: "blue",
    categoryAr: "لغة القلب",
    icon: "💬",
    question: "ما هو العهد الزوجي الأكثر أهمية بالنسبة لك والذي يجب أن نصونه دائماً؟",
    meta: "صيانة العهود"
  },
  {
    id: 41,
    category: "blue",
    categoryAr: "لغة القلب",
    icon: "💬",
    question: "هل تشعر بالأمان الكامل لتبوح لي بنقاط ضعفك ومخاوفك دون خجل؟",
    meta: "الأمان العاطفي"
  },
  {
    id: 42,
    category: "blue",
    categoryAr: "لغة القلب",
    icon: "💬",
    question: "ما هو النقد الذي وجهته لك سابقاً وتمنيت لو قمت بصياغته بلطف أكبر؟",
    meta: "النقاش البناء"
  },
  {
    id: 43,
    category: "blue",
    categoryAr: "لغة القلب",
    icon: "💬",
    question: "كيف يمكننا كسر حاجز الصمت أو الجفاء سريعاً إذا طال الخلاف؟",
    meta: "حل الأزمات"
  },
  {
    id: 44,
    category: "blue",
    categoryAr: "لغة القلب",
    icon: "💬",
    question: "ما هو الحوار الوجداني الأجمل الذي دار بيننا وتتمنى أن نكرره قريباً؟",
    meta: "حوارات دافئة"
  },
  {
    id: 45,
    category: "blue",
    categoryAr: "لغة القلب",
    icon: "💬",
    question: "ما هو الجهد الخفي الذي أقوم به من أجلك وتشعر بالامتنان التام له؟",
    meta: "الجهد الخفي"
  },
  {
    id: 46,
    category: "blue",
    categoryAr: "لغة القلب",
    icon: "💬",
    question: "ما الذي يعنيه لك السكن والسكينة في بيتنا، وكيف نوفره يومياً؟",
    meta: "السكينة المنزلية"
  },
  {
    id: 47,
    category: "blue",
    categoryAr: "لغة القلب",
    icon: "💬",
    question: "هل تجد صعوبة في طلب ما تحتاجه مني عاطفياً؟ ولماذا؟",
    meta: "التعبير عن الاحتياجات"
  },
  {
    id: 48,
    category: "blue",
    categoryAr: "لغة القلب",
    icon: "💬",
    question: "ما هي الصفة العاطفية التي تحبها في وتتمنى ألا تتغير أبداً؟",
    meta: "الصفات الجميلة"
  },

  // ------------------------------------------------------
  // 🌹 Memories (Lavender) - ذكرياتنا (49-72)
  // ------------------------------------------------------
  {
    id: 49,
    category: "purple",
    categoryAr: "ذكرياتنا",
    icon: "🌹",
    question: "ما هي الكلمة أو الإيماءة الأولى التي لفتت انتباهك لي في لقائنا الأول؟",
    meta: "اللقاء الأول"
  },
  {
    id: 50,
    category: "purple",
    categoryAr: "ذكرياتنا",
    icon: "🌹",
    question: "ما هي أطرف مغامرة أو موقف مضحك عشناه معاً ولا زلت تذكره؟",
    meta: "مواقف طريفة"
  },
  {
    id: 51,
    category: "purple",
    categoryAr: "ذكرياتنا",
    icon: "🌹",
    question: "ما هي أجمل ذكرى عطلة أو رحلة قضيناها معاً؟ وما المميز فيها؟",
    meta: "رحلات وأسفار"
  },
  {
    id: 52,
    category: "purple",
    categoryAr: "ذكرياتنا",
    icon: "🌹",
    question: "اذكر يوماً صعباً مررنا به وشعرت بعده أن علاقتنا أصبحت أقوى بكثير؟",
    meta: "مواجهة الصعاب"
  },
  {
    id: 53,
    category: "purple",
    categoryAr: "ذكرياتنا",
    icon: "🌹",
    question: "ما هو التاريخ أو المناسبة الخاصة بنا التي تحتفظ بأجمل مشاعر لها؟",
    meta: "تواريخ مميزة"
  },
  {
    id: 54,
    category: "purple",
    categoryAr: "ذكرياتنا",
    icon: "🌹",
    question: "ما هي التفاصيل التي تتذكرها من يوم زفافنا أو عقد قراننا؟",
    meta: "يوم الزفاف"
  },
  {
    id: 55,
    category: "purple",
    categoryAr: "ذكرياتنا",
    icon: "🌹",
    question: "ما هو المنزل أو الغرفة التي شهدت أجمل حواراتنا في بداية زواجنا؟",
    meta: "تفاصيل المكان"
  },
  {
    id: 56,
    category: "purple",
    categoryAr: "ذكرياتنا",
    icon: "🌹",
    question: "متى كانت اللحظة الأولى التي أدركت فيها أنك تريد قضاء بقية حياتك معي؟",
    meta: "قرار العمر"
  },
  {
    id: 57,
    category: "purple",
    categoryAr: "ذكرياتنا",
    icon: "🌹",
    question: "ما هي أول هدية قدمتها لك؟ وهل ما زلت تحتفظ بها أو بذكراها؟",
    meta: "أول هدية"
  },
  {
    id: 58,
    category: "purple",
    categoryAr: "ذكرياتنا",
    icon: "🌹",
    question: "كيف تجاوزنا أول خلاف حقيقي نشأ بيننا في السنة الأولى للزواج؟",
    meta: "سنة أولى زواج"
  },
  {
    id: 59,
    category: "purple",
    categoryAr: "ذكرياتنا",
    icon: "🌹",
    question: "ما هي الأغنية أو الأنشودة أو المقطع الذي يذكرك بي دائماً؟",
    meta: "ذاكرة الصوت"
  },
  {
    id: 60,
    category: "purple",
    categoryAr: "ذكرياتنا",
    icon: "🌹",
    question: "ما هو التحدي الصحي أو المهني الذي مررت به ووقفت أنا بجانبك فيه؟",
    meta: "الوقوف سنداً"
  },
  {
    id: 61,
    category: "purple",
    categoryAr: "ذكرياتنا",
    icon: "🌹",
    question: "ما هي أطرف طبخة أو وجبة أعددناها معاً وفسدت بطريقة فكاهية؟",
    meta: "مواقف المطبخ"
  },
  {
    id: 62,
    category: "purple",
    categoryAr: "ذكرياتنا",
    icon: "🌹",
    question: "ما هو التغيير الأكبر والأجمل الذي تلاحظه في شخصيتي منذ بداية زواجنا؟",
    meta: "التطور الشخصي"
  },
  {
    id: 63,
    category: "purple",
    categoryAr: "ذكرياتنا",
    icon: "🌹",
    question: "ما هي العادة القديمة التي كنا نقوم بها معاً وتتمنى أن نعيد إحياءها؟",
    meta: "عادات منسية"
  },
  {
    id: 64,
    category: "purple",
    categoryAr: "ذكرياتنا",
    icon: "🌹",
    question: "اذكر عبارة تشجيعية من عائلتي أو عائلتك تركت أثراً طيباً في بداية ارتباطنا؟",
    meta: "العائلة والارتباط"
  },
  {
    id: 65,
    category: "purple",
    categoryAr: "ذكرياتنا",
    icon: "🌹",
    question: "ما هي المفاجأة السارة الأجمل التي قمت بها من أجلك ولم تكن تتوقعها أبداً؟",
    meta: "المفاجآت السعيدة"
  },
  {
    id: 66,
    category: "purple",
    categoryAr: "ذكرياتنا",
    icon: "🌹",
    question: "كيف كان انطباعك عني بعد أول شهر كامل قضيناه معاً تحت سقف واحد؟",
    meta: "البدايات الأولى"
  },
  {
    id: 67,
    category: "purple",
    categoryAr: "ذكرياتنا",
    icon: "🌹",
    question: "ما هو اللقب اللطيف الذي كنا نتداوله سابقاً وتود سماعه مجدداً؟",
    meta: "ألقاب المحبة"
  },
  {
    id: 68,
    category: "purple",
    categoryAr: "ذكرياتنا",
    icon: "🌹",
    question: "ما هي الصورة الفوتوغرافية لنا التي تحمل أجمل قصة خلفها؟",
    meta: "قصة صورة"
  },
  {
    id: 69,
    category: "purple",
    categoryAr: "ذكرياتنا",
    icon: "🌹",
    question: "ما هو المشروع أو الإنجاز المشترك الأول الذي خططنا له ونجحنا في تحقيقه؟",
    meta: "الإنجاز الأول"
  },
  {
    id: 70,
    category: "purple",
    categoryAr: "ذكرياتنا",
    icon: "🌹",
    question: "كيف أثر وجود الأطفال (إن وجدوا) أو التفكير فيهم على مسار علاقتنا العاطفية؟",
    meta: "الأبوة والأمومة"
  },
  {
    id: 71,
    category: "purple",
    categoryAr: "ذكرياتنا",
    icon: "🌹",
    question: "ما هي النصيحة الزوجية التي تلقيناها سابقاً وأثبتت الأيام صحتها؟",
    meta: "حكمة الأيام"
  },
  {
    id: 72,
    category: "purple",
    categoryAr: "ذكرياتنا",
    icon: "🌹",
    question: "لو كتبنا قصة قصيرة عن حياتنا معاً، فماذا تقترح أن يكون عنوانها؟",
    meta: "قصة زواجنا"
  },

  // ------------------------------------------------------
  // 🌱 Future Together (Emerald Green) - مستقبلنا معاً (73-96)
  // ------------------------------------------------------
  {
    id: 73,
    category: "green",
    categoryAr: "مستقبلنا معاً",
    icon: "🌱",
    question: "أين ترى علاقتنا وحياتنا الزوجية بعد عشر سنوات من الآن؟",
    meta: "الرؤية العشرية"
  },
  {
    id: 74,
    category: "green",
    categoryAr: "مستقبلنا معاً",
    icon: "🌱",
    question: "ما هي الوجهة السياحية الحلم التي نتمنى زيارتها معاً مستقبلاً؟",
    meta: "وجهات الحلم"
  },
  {
    id: 75,
    category: "green",
    categoryAr: "مستقبلنا معاً",
    icon: "🌱",
    question: "كيف يمكنني مساندتك بشكل أفضل لتحقيق أهدافك المهنية القادمة؟",
    meta: "الدعم المهني"
  },
  {
    id: 76,
    category: "green",
    categoryAr: "مستقبلنا معاً",
    icon: "🌱",
    question: "ما هي القيمة التربوية الأساسية التي تصر على غرسها في أبنائنا؟",
    meta: "التربية والقيم"
  },
  {
    id: 77,
    category: "green",
    categoryAr: "مستقبلنا معاً",
    icon: "🌱",
    question: "ما هو المشروع الاستثماري أو التجاري الذي تحلم بإنشائه معي؟",
    meta: "المستقبل المالي"
  },
  {
    id: 78,
    category: "green",
    categoryAr: "مستقبلنا معاً",
    icon: "🌱",
    question: "كيف تتخيل روتين حياتنا اليومي بعد تقاعدنا عن العمل مستقبلاً؟",
    meta: "سن التقاعد"
  },
  {
    id: 79,
    category: "green",
    categoryAr: "مستقبلنا معاً",
    icon: "🌱",
    question: "ما هي العادة الصحية التي تتمنى أن نبدأ في تطبيقها معاً كزوجين؟",
    meta: "الصحة وال웰نس"
  },
  {
    id: 80,
    category: "green",
    categoryAr: "مستقبلنا معاً",
    icon: "🌱",
    question: "ما هو الأثر الطيب الذي ترغب في أن يذكره الناس عن عائلتنا؟",
    meta: "الأثر والذكر الطيب"
  },
  {
    id: 81,
    category: "green",
    categoryAr: "مستقبلنا معاً",
    icon: "🌱",
    question: "كيف يمكننا تجديد شغف الحب والتقارب بيننا طوال السنين القادمة؟",
    meta: "حيوية مستدامة"
  },
  {
    id: 82,
    category: "green",
    categoryAr: "مستقبلنا معاً",
    icon: "🌱",
    question: "ما هو التعديل أو التحسين الذي نود إدخاله على بيتنا الحالي مستقبلاً؟",
    meta: "تحسين المنزل"
  },
  {
    id: 83,
    category: "green",
    categoryAr: "مستقبلنا معاً",
    icon: "🌱",
    question: "ما هو العمل الخيري أو الإنساني الذي نود المساهمة فيه سوياً؟",
    meta: "العطاء المشترك"
  },
  {
    id: 84,
    category: "green",
    categoryAr: "مستقبلنا معاً",
    icon: "🌱",
    question: "كيف نستطيع صيانة توازن وقتنا بين العائلة والعمل والوقت الخاص بنا؟",
    meta: "إدارة الوقت"
  },
  {
    id: 85,
    category: "green",
    categoryAr: "مستقبلنا معاً",
    icon: "🌱",
    question: "ما هو الجانب المعرفي أو الديني الذي تود أن نتطور فيه معاً؟",
    meta: "النمو الروحي"
  },
  {
    id: 86,
    category: "green",
    categoryAr: "مستقبلنا معاً",
    icon: "🌱",
    question: "أين تحلم بقضاء الإجازة السنوية القادمة؟ وكيف نخطط لها من الآن؟",
    meta: "العطلة القادمة"
  },
  {
    id: 87,
    category: "green",
    categoryAr: "مستقبلنا معاً",
    icon: "🌱",
    question: "ما هي المهارة التي تعتقد أننا سنحتاجها لمواجهة تحديات المستقبل؟",
    meta: "مهارات المستقبل"
  },
  {
    id: 88,
    category: "green",
    categoryAr: "مستقبلنا معاً",
    icon: "🌱",
    question: "ما هي العادات الاجتماعية التي نود تقليلها لحماية استقرارنا الأسري؟",
    meta: "العلاقات والحدود"
  },
  {
    id: 89,
    category: "green",
    categoryAr: "مستقبلنا معاً",
    icon: "🌱",
    question: "كيف نضمن بقاء الحوار مفتوحاً وصادقاً بيننا مهما بلغت المشاغل؟",
    meta: "قنوات الاتصال"
  },
  {
    id: 90,
    category: "green",
    categoryAr: "مستقبلنا معاً",
    icon: "🌱",
    question: "ما الذي ترغب في تحقيقه عائلياً في العام الجديد؟",
    meta: "أهداف السنة الجديدة"
  },
  {
    id: 91,
    category: "green",
    categoryAr: "مستقبلنا معاً",
    icon: "🌱",
    question: "ما هي الطريقة التي تود أن نحتفل بها بيوبيل زواجنا الفضي مستقبلاً؟",
    meta: "اليوبيل الفضي"
  },
  {
    id: 92,
    category: "green",
    categoryAr: "مستقبلنا معاً",
    icon: "🌱",
    question: "ما هي النصيحة التي تود أن نقدمها لأولادنا عند زواجهم في المستقبل؟",
    meta: "إرث النصيحة"
  },
  {
    id: 93,
    category: "green",
    categoryAr: "مستقبلنا معاً",
    icon: "🌱",
    question: "كيف نتصرف إذا واجهنا تغيرات جغرافية أو انتقالات مهنية اضطرارية؟",
    meta: "المرونة والتكيف"
  },
  {
    id: 94,
    category: "green",
    categoryAr: "مستقبلنا معاً",
    icon: "🌱",
    question: "ما هو الشيء الذي تعتبره ركيزة الأمان المالي لعائلتنا مستقبلاً؟",
    meta: "الأمان المالي"
  },
  {
    id: 95,
    category: "green",
    categoryAr: "مستقبلنا معاً",
    icon: "🌱",
    question: "ما هي المغامرة الجريئة التي تود خوضها معي وتخشى القيام بها وحدك؟",
    meta: "مغامرات مشتركة"
  },
  {
    id: 96,
    category: "green",
    categoryAr: "مستقبلنا معاً",
    icon: "🌱",
    question: "ما هو الدعاء الذي تردده دائماً لعائلتنا ومستقبلنا المشترك؟",
    meta: "بركة الدعاء"
  },

  // ------------------------------------------------------
  // ⭐ Challenges (Gold) - تحديات زوجية (97-120)
  // ------------------------------------------------------
  {
    id: 97,
    category: "gold",
    categoryAr: "تحديات زوجية",
    icon: "⭐",
    question: "انظر في عيني شريكك بصمت تام لمدة ٣٠ ثانية دون أن تبتسم أو تتكلم.",
    meta: "تحدي تواصل العيون"
  },
  {
    id: 98,
    category: "gold",
    categoryAr: "تحديات زوجية",
    icon: "⭐",
    question: "اذكر ثلاثة صفات ملموسة تمتن لوجودها في شريكك وتعبر عنها الآن بصدق.",
    meta: "تحدي الامتنان اللفظي"
  },
  {
    id: 99,
    category: "gold",
    categoryAr: "تحديات زوجية",
    icon: "⭐",
    question: "قم بتقليد الشريك في حركة طريفة أو عبارة شهيرة يكررها دائماً بالمنزل.",
    meta: "تحدي التقليد الطريف"
  },
  {
    id: 100,
    category: "gold",
    categoryAr: "تحديات زوجية",
    icon: "⭐",
    question: "عبّر عن حبك للشريك باستخدام ثلاث كلمات فقط لا غير، وبكل مشاعرك.",
    meta: "تحدي الكلمات الثلاث"
  },
  {
    id: 101,
    category: "gold",
    categoryAr: "تحديات زوجية",
    icon: "⭐",
    question: "قم بإعداد كوب دافئ من الشاي أو القهوة وقدمه للشريك مع قبلة لطيفة الآن.",
    meta: "تحدي الخدمة العاجلة"
  },
  {
    id: 102,
    category: "gold",
    categoryAr: "تحديات زوجية",
    icon: "⭐",
    question: "احضن شريكك عناقاً متواصلاً وصامتاً لمدة ٦ ثوانٍ كاملة للتخلص من توتر اليوم.",
    meta: "تحدي عناق ٦ ثواني"
  },
  {
    id: 103,
    category: "gold",
    categoryAr: "تحديات زوجية",
    icon: "⭐",
    question: "امسك يد الشريك الآن واقرأ كف يده متخيلاً مستقبله اللطيف بطريقة فكاهية.",
    meta: "تحدي قراءة الكف الطريف"
  },
  {
    id: 104,
    category: "gold",
    categoryAr: "تحديات زوجية",
    icon: "⭐",
    question: "اذكر وجبة طعام يتقنها شريكك وعبر عن رغبتك في تناولها من يديه قريباً.",
    meta: "تحدي مديح المطبخ"
  },
  {
    id: 105,
    category: "gold",
    categoryAr: "تحديات زوجية",
    icon: "⭐",
    question: "قم بوصف اللقاء الأول بيننا وكيف بدت ملامح شريكك وتصرفاته بأسلوب تمثيلي.",
    meta: "تحدي استعادة اللقاء"
  },
  {
    id: 106,
    category: "gold",
    categoryAr: "تحديات زوجية",
    icon: "⭐",
    question: "اكتب رسالة شكر قصيرة مكونة من سطرين على هاتفك وأرسلها للشريك الجالس أمامك.",
    meta: "تحدي الرسائل العاجلة"
  },
  {
    id: 107,
    category: "gold",
    categoryAr: "تحديات زوجية",
    icon: "⭐",
    question: "اذكر أمراً واحداً تعتقد أن الشريك يتفوق فيه عليك وتتمنى التعلم منه.",
    meta: "تحدي الاعتراف بالفوقية"
  },
  {
    id: 108,
    category: "gold",
    categoryAr: "تحديات زوجية",
    icon: "⭐",
    question: "ما هي النصيحة الذهبية التي تود توجيهها للشريك لحماية صحته وراحته النفسية؟",
    meta: "تحدي النصيحة الحانية"
  },
  {
    id: 109,
    category: "gold",
    categoryAr: "تحديات زوجية",
    icon: "⭐",
    question: "امسح على رأس شريكك وادعُ له بدعاء صادق من قلبك بصوت مسموع ودافئ.",
    meta: "تحدي مسح الرأس والدعاء"
  },
  {
    id: 110,
    category: "gold",
    categoryAr: "تحديات زوجية",
    icon: "⭐",
    question: "حدد موعداً مقدساً لنا هذا الأسبوع (خروج أو سهرة منزلية) والتزم بحمايته من الإلغاء.",
    meta: "تحدي الموعد المقدس"
  },
  {
    id: 111,
    category: "gold",
    categoryAr: "تحديات زوجية",
    icon: "⭐",
    question: "قم بغناء مقطع لطيف أو إلقاء بيت شعر يعبر عن مشاعرك الحالية تجاه الشريك.",
    meta: "تحدي الصوت الشاعر"
  },
  {
    id: 112,
    category: "gold",
    categoryAr: "تحديات زوجية",
    icon: "⭐",
    question: "امسك يدي الشريك بقوة وأخبره بعبارة صريحة: 'أنا سعيد جداً لأنك شريك حياتي'.",
    meta: "تحدي تأكيد الشراكة"
  },
  {
    id: 113,
    category: "gold",
    categoryAr: "تحديات زوجية",
    icon: "⭐",
    question: "قم بعمل مساج خفيف لرقبة أو كف الشريك لمدة دقيقتين متواصلتين لتخفيف عناء اليوم.",
    meta: "تحدي المساج السريع"
  },
  {
    id: 114,
    category: "gold",
    categoryAr: "تحديات زوجية",
    icon: "⭐",
    question: "اذكر سراً صغيراً أو رغبة طريفة لم تخبر بها الشريك سابقاً وتود البوح بها الآن.",
    meta: "تحدي البوح الصغير"
  },
  {
    id: 115,
    category: "gold",
    categoryAr: "تحديات زوجية",
    icon: "⭐",
    question: "اعترف بخطأ صغير ارتكبته سابقاً واعتذر للشريك بابتسامة وطلب العفو والرضا.",
    meta: "تحدي الاعتذار اللطيف"
  },
  {
    id: 116,
    category: "gold",
    categoryAr: "تحديات زوجية",
    icon: "⭐",
    question: "قم بكتابة لقب محبب للشريك على ورقة صغيرة وضعها في محفظته أو حقيبته سراً.",
    meta: "تحدي الرسائل السرية"
  },
  {
    id: 117,
    category: "gold",
    categoryAr: "تحديات زوجية",
    icon: "⭐",
    question: "تبادل الأدوار عفوياً؛ ليقم كل منكما بمحاكاة رد فعل الآخر في موقف يومي معتاد.",
    meta: "تحدي تبادل الأدوار"
  },
  {
    id: 118,
    category: "gold",
    categoryAr: "تحديات زوجية",
    icon: "⭐",
    question: "اذكر عادة حسنة واحدة اكتسبتها بفضل زواجك من الشريك وتعتقد أنها غيرت حياتك.",
    meta: "تحدي الأثر الإيجابي"
  },
  {
    id: 119,
    category: "gold",
    categoryAr: "تحديات زوجية",
    icon: "⭐",
    question: "قم بوضع خطة مفاجئة متكاملة لليلة الغد؛ ليكون الشريك ضيفاً معززاً في سهرة من ترتيبك.",
    meta: "تحدي السهرة المفاجئة"
  },
  {
    id: 120,
    category: "gold",
    categoryAr: "تحديات زوجية",
    icon: "⭐",
    question: "انهي اللعبة بابتسامة دافئة وصافح الشريك مصافحة تقدير وعهد على استمرار الود والمحبة.",
    meta: "تحدي ميثاق الود"
  }
];

// ========================================================
// BOOKLET PAGES DATABASE
// ========================================================
const BOOKLET_PAGES = [
  {
    title: "مرحباً بكم في بين قلبين",
    content: `
      <p>لعبة <strong>"بين قلبين"</strong> هي أكثر من مجرد لعبة كروت — إنها رحلة عاطفية تفاعلية مصممة لتقريب المسافات، وإحياء الذكريات، وكسر الروتين، وتحديث معرفتكم ببعضكم البعض تحت سقف واحد.</p>
      <p>تأتيكم هذه اللعبة بإنتاج مشترك من منصّة <strong>"خيركم" (خيركم لأهله)</strong>، لتكون رفيقاً عملياً في جلساتكم الهادئة وسهراتكم الخاصة.</p>
      <p>تنقسم الكروت إلى 5 فئات أساسية تغطي جوانب العلاقة الزوجية المختلفة:</p>
      <ul>
        <li><strong>عرف شريكك (رملي وردي)</strong>: أسئلة حول عاداته وميوله المفضلة.</li>
        <li><strong>لغة القلب (سماوي مائي)</strong>: لفهم الاحتياجات العاطفية والتعبير الفعال.</li>
        <li><strong>ذكرياتنا (خزامى لافندر)</strong>: لاستعادة دفء البدايات والمواقف الطريفة المشتركة.</li>
        <li><strong>مستقبلنا معاً (أخضر زمردي)</strong>: لرسم أحلام الغد والرؤية المشتركة.</li>
        <li><strong>تحديات زوجية (ذهبي ملكي)</strong>: أنشطة ومهام تفاعلية فورية لتعزيز الألفة.</li>
      </ul>
    `
  },
  {
    title: "إعداد اللعبة وكيفية اللعب",
    content: `
      <p><strong>طريقة الإعداد:</strong></p>
      <ol>
        <li>قم بخلط كروت كل فئة على حدة، وضع الخمس مجموعات في منتصف الجلسة بحيث تكون واجهتها للأسفل.</li>
        <li>أحضرا ورقة وقلم (أو استخدموا كراسة النتائج الرقمية المرفقة في التطبيق).</li>
        <li>هيئوا أجواءً هادئة وخالية من المشتتات والشاشات (شمعة دافئة، كوبان من الشاي المفضل).</li>
      </ol>
      <p><strong>كيفية اللعب:</strong></p>
      <ul>
        <li>يتناوب الزوجان على سحب الكروت. يسحب اللاعب الأول كرتاً ويقرأ السؤال المكتوب بصوت مسموع لشريكه.</li>
        <li>يقوم الشريك بالإجابة عن السؤال بصدق.</li>
        <li>إذا كانت الإجابة صحيحة أو لامست القلب بصدق تام، يحصل الثنائي على نقاط توافق في الفئة المقابلة.</li>
        <li>في كروت <strong>"التحديات الزوجية"</strong>، يقوم الطرفان بأداء المهمة معاً فوراً للحصول على النقاط.</li>
      </ul>
    `
  },
  {
    title: "قواعد التوافق ورصد النقاط",
    content: `
      <p>الهدف من اللعبة ليس الفوز الفردي بل بناء **رصيد توافق عاطفي مشترك** مرتفع. يتم رصد النقاط في كراسة النتائج كالتالي:</p>
      <ul>
        <li><strong>سؤال مباشر (فئات عرف شريكك، لغة القلب)</strong>: إجابة نموذجية مطابقة لتفضيلات الشريك = <strong>5 نقاط</strong>.</li>
        <li><strong>سؤال ذكريات (فئة ذكرياتنا)</strong>: استحضار تفاصيل ذكرى مشتركة بدقة = <strong>10 نقاط</strong>.</li>
        <li><strong>رؤية مستقبلية (فئة مستقبلنا معاً)</strong>: توافق الرؤية والاتفاق على الأهداف = <strong>10 نقاط</strong>.</li>
        <li><strong>تحديات عفوية (فئة تحديات زوجية)</strong>: أداء التحدي بانسجام ومرح = <strong>15 نقطة</strong>.</li>
      </ul>
      <p>استخدموا حاسبة التوافق الرقمية المتاحة في الواجهة لحساب النسبة المئوية للانسجام في جلستكم الحالية وتحديد جوانب القوة ومواطن الحاجة للتقارب.</p>
    `
  },
  {
    title: "نصائح لجلسة استثنائية",
    content: `
      <p>لضمان الحصول على أقصى فائدة وأثر عاطفي طيب من اللعبة، ننصح بالآتي:</p>
      <ul>
        <li><strong>تجنب المكابرة أو الجدال</strong>: اللعبة مساحة آمنة للمحبة والتقارب، وليست محاكمة أو عتاباً على تقصير سابق.</li>
        <li><strong>الإنصات التام والتعاطف</strong>: استمعوا لبعضكم البعض باهتمام ودون مقاطعة.</li>
        <li><strong>الصدق التام</strong>: الإجابة الصادقة والنابعة من القلب تعزز الأمان العاطفي وتزيد الثقة.</li>
        <li><strong>تكرار اللعب</strong>: كرروا اللعب مرة كل شهر؛ فالأفكار والاهتمامات تتطور وتتغير مع مرور الوقت والمواقف.</li>
      </ul>
      <p>نتمنى لكم جلسة دافئة مليئة بالمودة والتقارب العاطفي الدائم.</p>
    `
  }
];

// ========================================================
// INTERACTIVE LOGIC & APPLICATION INITIALIZATION
// ========================================================
document.addEventListener("DOMContentLoaded", () => {
  renderCardDeck(CARD_DECK);
  setupFilters();
  setupSearch();
  setupBooklet(0);
  setupScoreCalculator();
  setupAnimations();
});

// Render cards dynamically
function renderCardDeck(cards) {
  const grid = document.getElementById("cards-grid");
  if (!grid) return;
  grid.innerHTML = "";

  cards.forEach(card => {
    const cardEl = document.createElement("div");
    cardEl.className = "card-container";
    cardEl.setAttribute("data-id", card.id);
    cardEl.setAttribute("data-category", card.category);

    cardEl.innerHTML = `
      <div class="card-inner">
        <div class="card-front cat-${card.category}">
          <div class="card-header">
            <span class="card-category-label">${card.icon} ${card.categoryAr}</span>
            <span class="card-number">#${String(card.id).padStart(3, '0')}</span>
          </div>
          <div class="card-body">
            <h3 class="card-question">${card.question}</h3>
          </div>
          <div class="card-footer">
            <span>${card.meta}</span>
            <div class="card-footer-logo">
              <img src="logo.png" alt="شعار خيركم" onerror="this.style.display='none'">
            </div>
          </div>
        </div>
        <div class="card-back">
          <div class="card-back-pattern">
            <div class="luxury-ornament orn-top-right"></div>
            <div class="luxury-ornament orn-top-left"></div>
            <div class="luxury-ornament orn-bottom-right"></div>
            <div class="luxury-ornament orn-bottom-left"></div>
            <h2 class="card-back-logo">بين قلبين</h2>
            <span class="card-back-subtitle">لعبة التوافق الزوجي</span>
          </div>
        </div>
      </div>
    `;

    // Click to flip card
    cardEl.addEventListener("click", () => {
      cardEl.classList.toggle("flipped");
    });

    grid.appendChild(cardEl);
  });
}

// Setup category filters
function setupFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-category");
      filterCards(category, document.getElementById("card-search").value);
    });
  });
}

// Setup search bar
function setupSearch() {
  const searchInput = document.getElementById("card-search");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const activeFilter = document.querySelector(".filter-btn.active");
    const category = activeFilter ? activeFilter.getAttribute("data-category") : "all";
    filterCards(category, e.target.value);
  });
}

// Filter cards combined logic
function filterCards(category, query) {
  const cards = document.querySelectorAll(".card-container");
  let matchesCount = 0;

  cards.forEach(card => {
    const catMatch = (category === "all" || card.getAttribute("data-category") === category);
    const qMatch = !query || card.querySelector(".card-question").textContent.includes(query);

    if (catMatch && qMatch) {
      card.style.display = "block";
      matchesCount++;
    } else {
      card.style.display = "none";
    }
  });

  console.log(`Cards Filtered: category=${category}, query=${query}, matches=${matchesCount}`);
}

// Booklet Logic
let currentBookletPage = 0;
function setupBooklet(pageIndex) {
  const viewer = document.getElementById("booklet-viewer");
  if (!viewer) return;

  const page = BOOKLET_PAGES[pageIndex];
  const titleEl = viewer.querySelector(".booklet-title");
  const bodyEl = viewer.querySelector(".booklet-body");
  const footerPageNum = viewer.querySelector(".booklet-page-num");

  titleEl.innerHTML = page.title;
  bodyEl.innerHTML = page.content;
  footerPageNum.textContent = `صفحة ${pageIndex + 1} من ${BOOKLET_PAGES.length}`;

  // Update navigation buttons
  const navBtns = document.querySelectorAll(".booklet-nav-btn");
  navBtns.forEach((btn, idx) => {
    btn.classList.toggle("active", idx === pageIndex);
  });

  currentBookletPage = pageIndex;
}

// Digital Score Calculator Logic
function setupScoreCalculator() {
  const calcInputs = document.querySelectorAll(".score-input");
  const progressCircle = document.getElementById("score-progress");
  const percentText = document.getElementById("score-percent");
  const messageText = document.getElementById("score-message");

  if (!calcInputs.length || !progressCircle) return;

  const calculateCompatibility = () => {
    let totalScore = 0;
    let maxPossibleScore = 0;

    calcInputs.forEach(input => {
      const val = parseInt(input.value) || 0;
      const weight = parseInt(input.dataset.weight) || 5;
      totalScore += val * weight;
      maxPossibleScore += 5 * weight; // Assume 5 is maximum grade per category input
    });

    const percentage = maxPossibleScore > 0 ? Math.round((totalScore / maxPossibleScore) * 100) : 0;
    
    // Update SVG progress circle
    const r = 70; // radius of SVG circle
    const circumference = 2 * Math.PI * r;
    const offset = circumference - (percentage / 100) * circumference;
    progressCircle.style.strokeDashoffset = offset;
    
    percentText.textContent = `${percentage}%`;

    // Messages
    let message = "";
    if (percentage >= 85) {
      message = "امتياز! توافق رائع وعلاقة متينة تفهم دقات القلوب وتفاصيل المشاعر. استمروا على هذا النهج الدافئ!";
    } else if (percentage >= 65) {
      message = "جيد جداً! توافق عاطفي وانسجام طيب. هناك فرص رائعة لتعزيز التقارب وكسر رتابة الأيام بمزيد من الحوار.";
    } else if (percentage >= 45) {
      message = "مقبول! تحتاجون إلى تكثيف إيداعاتكم العاطفية وإعادة اكتشاف تفاصيل شريك حياتكم ولغات حبه بدقة.";
    } else {
      message = "رصيد منخفض! ننصح بإعادة قراءة كتاب البنك العاطفي والالتزام بتحدي المودة لترقية رصيد الألفة الزوجية.";
    }
    messageText.textContent = message;
  };

  calcInputs.forEach(input => {
    input.addEventListener("input", () => {
      // Limit values between 0 and 5
      let val = parseInt(input.value);
      if (val > 5) input.value = 5;
      if (val < 0) input.value = 0;
      calculateCompatibility();
    });
  });

  // Init calculation
  calculateCompatibility();
}

// Interactivity / Animations helpers
function setupAnimations() {
  // Float effect triggers
  const elements = document.querySelectorAll(".glass-panel");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(el);
  });
}

// Print Deck trigger
function printDeck() {
  window.print();
}

// Booklet page trigger
function navigateBooklet(direction) {
  let next = currentBookletPage + direction;
  if (next >= 0 && next < BOOKLET_PAGES.length) {
    setupBooklet(next);
  }
}
