// Instructions to get this list:
// 1. Download CSV for cities from https://data.gov.il/dataset/citiesandsettelments
// 2. Copy file content.
// 3. Go to https://www.convertcsv.com/csv-to-json.htm
// 4. Paste the CSV content into the input text box.
// 5. In "step 3 - Choose output options" change field positions to 2,3,6, check
//    "Trim Left" and "Trim Right" in all columns and fill 2 under field for keyed JSON.
// 6. Under "step 5" click "CSV to Keyed JSON".
// 7. Copy result to here, and replace all "שם_ישוב" to "name" and "שם_נפה" to "district".

export const CITIES = {
  '0': {
    name: 'לא רשום',
    district: 'לא ידוע',
  },
  '7': {
    name: 'שחר',
    district: 'אשקלון',
  },
  '10': {
    name: 'תירוש',
    district: 'ירושלים',
  },
  '11': {
    name: 'ניר ח"ן',
    district: 'אשקלון',
  },
  '13': {
    name: 'חצבה',
    district: 'באר שבע',
  },
  '15': {
    name: 'נועם',
    district: 'אשקלון',
  },
  '16': {
    name: 'בית ניר',
    district: 'אשקלון',
  },
  '18': {
    name: 'שדה משה',
    district: 'אשקלון',
  },
  '21': {
    name: 'באר אורה',
    district: 'באר שבע',
  },
  '22': {
    name: 'מקווה ישראל',
    district: 'חולון',
  },
  '23': {
    name: 'אמציה',
    district: 'אשקלון',
  },
  '24': {
    name: 'לכיש',
    district: 'אשקלון',
  },
  '26': {
    name: 'ראש פינה',
    district: 'צפת',
  },
  '27': {
    name: 'שדות מיכה',
    district: 'ירושלים',
  },
  '28': {
    name: 'מזכרת בתיה',
    district: 'רחובות',
  },
  '29': {
    name: 'יסוד המעלה',
    district: 'צפת',
  },
  '31': {
    name: 'אופקים',
    district: 'באר שבע',
  },
  '32': {
    name: 'עוצם',
    district: 'אשקלון',
  },
  '33': {
    name: 'בת שלמה',
    district: 'חדרה',
  },
  '35': {
    name: 'גדות',
    district: 'צפת',
  },
  '36': {
    name: 'שדה דוד',
    district: 'אשקלון',
  },
  '37': {
    name: 'איתן',
    district: 'אשקלון',
  },
  '38': {
    name: 'כרי דשא',
    district: 'כנרת',
  },
  '39': {
    name: 'גפן',
    district: 'ירושלים',
  },
  '41': {
    name: 'אליכין',
    district: 'השרון',
  },
  '43': {
    name: 'מטולה',
    district: 'צפת',
  },
  '44': {
    name: 'זוהר',
    district: 'אשקלון',
  },
  '46': {
    name: 'יבנאל',
    district: 'כנרת',
  },
  '47': {
    name: 'כפר תבור',
    district: 'כנרת',
  },
  '48': {
    name: 'מנחמיה',
    district: 'כנרת',
  },
  '49': {
    name: 'אילניה',
    district: 'כנרת',
  },
  '52': {
    name: 'לוזית',
    district: 'ירושלים',
  },
  '53': {
    name: 'עתלית',
    district: 'חדרה',
  },
  '55': {
    name: 'נוגה',
    district: 'אשקלון',
  },
  '57': {
    name: 'כנרת (קבוצה)',
    district: 'כנרת',
  },
  '58': {
    name: 'מצפה',
    district: 'כנרת',
  },
  '59': {
    name: 'נחושה',
    district: 'ירושלים',
  },
  '62': {
    name: "דגניה א'",
    district: 'כנרת',
  },
  '63': {
    name: 'כנרת (מושבה)',
    district: 'כנרת',
  },
  '64': {
    name: 'יד רמב"ם',
    district: 'רמלה',
  },
  '65': {
    name: 'מגדל',
    district: 'כנרת',
  },
  '66': {
    name: 'מרחביה (קיבוץ)',
    district: 'עפולה',
  },
  '67': {
    name: 'אור הנר',
    district: 'אשקלון',
  },
  '69': {
    name: 'ניר עוז',
    district: 'באר שבע',
  },
  '70': {
    name: 'אשדוד',
    district: 'אשקלון',
  },
  '71': {
    name: 'אשבול',
    district: 'באר שבע',
  },
  '72': {
    name: 'גן שמואל',
    district: 'חדרה',
  },
  '74': {
    name: 'עין הוד',
    district: 'חדרה',
  },
  '76': {
    name: 'כפר גלעדי',
    district: 'צפת',
  },
  '77': {
    name: 'איילת השחר',
    district: 'צפת',
  },
  '78': {
    name: 'קרית ענבים',
    district: 'ירושלים',
  },
  '79': {
    name: "דגניה ב'",
    district: 'כנרת',
  },
  '80': {
    name: 'נהלל',
    district: 'עפולה',
  },
  '82': {
    name: 'עין חרוד (מאוחד)',
    district: 'עפולה',
  },
  '84': {
    name: 'תל יוסף',
    district: 'עפולה',
  },
  '85': {
    name: 'כפר יחזקאל',
    district: 'עפולה',
  },
  '86': {
    name: 'גבע',
    district: 'עפולה',
  },
  '88': {
    name: 'כרם בן שמן',
    district: 'רמלה',
  },
  '89': {
    name: 'עין חרוד (איחוד)',
    district: 'עפולה',
  },
  '90': {
    name: 'חפצי-בה',
    district: 'עפולה',
  },
  '92': {
    name: 'גיניגר',
    district: 'עפולה',
  },
  '94': {
    name: 'בלפוריה',
    district: 'עפולה',
  },
  '95': {
    name: 'בית אלפא',
    district: 'עפולה',
  },
  '96': {
    name: 'יגור',
    district: 'חיפה',
  },
  '97': {
    name: 'מרחביה (מושב)',
    district: 'עפולה',
  },
  '98': {
    name: 'כפר מל"ל',
    district: 'פתח תקווה',
  },
  '99': {
    name: 'מצפה רמון',
    district: 'באר שבע',
  },
  '102': {
    name: 'מאיר שפיה',
    district: 'חדרה',
  },
  '103': {
    name: 'תל עדשים',
    district: 'עפולה',
  },
  '104': {
    name: 'מזרע',
    district: 'עפולה',
  },
  '106': {
    name: 'כפר גדעון',
    district: 'עפולה',
  },
  '107': {
    name: 'כפר סילבר',
    district: 'אשקלון',
  },
  '112': {
    name: "כפר חסידים א'",
    district: 'חיפה',
  },
  '113': {
    name: 'אדירים',
    district: 'עפולה',
  },
  '115': {
    name: 'חופית',
    district: 'השרון',
  },
  '122': {
    name: 'רמת ישי',
    district: 'עפולה',
  },
  '126': {
    name: 'שריד',
    district: 'עפולה',
  },
  '127': {
    name: 'רמת רחל',
    district: 'ירושלים',
  },
  '128': {
    name: 'גת רימון',
    district: 'פתח תקווה',
  },
  '130': {
    name: 'משמר העמק',
    district: 'עפולה',
  },
  '132': {
    name: 'כפר ברוך',
    district: 'עפולה',
  },
  '133': {
    name: 'גבת',
    district: 'עפולה',
  },
  '134': {
    name: 'יפעת',
    district: 'עפולה',
  },
  '135': {
    name: 'רמת דוד',
    district: 'עפולה',
  },
  '139': {
    name: 'עין שמר',
    district: 'חדרה',
  },
  '140': {
    name: 'כפר יהושע',
    district: 'עפולה',
  },
  '141': {
    name: 'ברק',
    district: 'עפולה',
  },
  '142': {
    name: 'שדה יעקב',
    district: 'עפולה',
  },
  '143': {
    name: 'בית זרע',
    district: 'כנרת',
  },
  '144': {
    name: 'גן שלמה',
    district: 'רחובות',
  },
  '145': {
    name: 'גדיש',
    district: 'עפולה',
  },
  '146': {
    name: 'דבורה',
    district: 'עפולה',
  },
  '147': {
    name: 'גבעת ברנר',
    district: 'רחובות',
  },
  '154': {
    name: 'תל מונד',
    district: 'השרון',
  },
  '155': {
    name: 'באר טוביה',
    district: 'אשקלון',
  },
  '156': {
    name: 'עיינות',
    district: 'רחובות',
  },
  '157': {
    name: 'עין ורד',
    district: 'השרון',
  },
  '158': {
    name: 'נען',
    district: 'רמלה',
  },
  '159': {
    name: 'בית חנן',
    district: 'רחובות',
  },
  '160': {
    name: 'חולדה',
    district: 'רמלה',
  },
  '162': {
    name: 'חירות',
    district: 'השרון',
  },
  '163': {
    name: 'תימורים',
    district: 'אשקלון',
  },
  '164': {
    name: 'מלאה',
    district: 'עפולה',
  },
  '165': {
    name: 'ניר יפה',
    district: 'עפולה',
  },
  '166': {
    name: 'גן יבנה',
    district: 'רחובות',
  },
  '167': {
    name: 'עין החורש',
    district: 'השרון',
  },
  '168': {
    name: 'כפר יונה',
    district: 'השרון',
  },
  '170': {
    name: 'כפר יעבץ',
    district: 'השרון',
  },
  '171': {
    name: 'פרדסיה',
    district: 'השרון',
  },
  '173': {
    name: 'גבעת חיים (מאוחד)',
    district: 'השרון',
  },
  '174': {
    name: 'נטעים',
    district: 'רחובות',
  },
  '175': {
    name: 'אביחיל',
    district: 'השרון',
  },
  '176': {
    name: 'אפיקים',
    district: 'כנרת',
  },
  '177': {
    name: 'כפר ביל"ו',
    district: 'רחובות',
  },
  '178': {
    name: 'רמת יוחנן',
    district: 'חיפה',
  },
  '182': {
    name: 'אבן יהודה',
    district: 'השרון',
  },
  '183': {
    name: 'ירקונה',
    district: 'פתח תקווה',
  },
  '184': {
    name: 'רמת הכובש',
    district: 'פתח תקווה',
  },
  '186': {
    name: 'נעורים',
    district: 'השרון',
  },
  '187': {
    name: 'כפר הס',
    district: 'השרון',
  },
  '188': {
    name: 'אשדות יעקב  (מאוחד)',
    district: 'כנרת',
  },
  '189': {
    name: 'כפר פינס',
    district: 'חדרה',
  },
  '190': {
    name: 'כפר ויתקין',
    district: 'השרון',
  },
  '191': {
    name: 'הדר עם',
    district: 'השרון',
  },
  '192': {
    name: 'כפר החורש',
    district: 'עפולה',
  },
  '193': {
    name: 'כפר חיים',
    district: 'השרון',
  },
  '194': {
    name: 'משמר השרון',
    district: 'השרון',
  },
  '195': {
    name: 'קדימה-צורן',
    district: 'השרון',
  },
  '196': {
    name: 'גיבתון',
    district: 'רחובות',
  },
  '197': {
    name: 'מעברות',
    district: 'השרון',
  },
  '198': {
    name: 'צופית',
    district: 'פתח תקווה',
  },
  '199': {
    name: 'אשדות יעקב  (איחוד)',
    district: 'כנרת',
  },
  '200': {
    name: 'בית ינאי',
    district: 'השרון',
  },
  '202': {
    name: 'בית עובד',
    district: 'רחובות',
  },
  '204': {
    name: 'אלישיב',
    district: 'השרון',
  },
  '205': {
    name: 'חגלה',
    district: 'השרון',
  },
  '206': {
    name: 'רמות השבים',
    district: 'פתח תקווה',
  },
  '207': {
    name: 'גבעת ח"ן',
    district: 'פתח תקווה',
  },
  '208': {
    name: 'מוצא עילית',
    district: 'ירושלים',
  },
  '212': {
    name: 'בית צבי',
    district: 'חדרה',
  },
  '213': {
    name: 'משמרות',
    district: 'חדרה',
  },
  '217': {
    name: 'כפר הרא"ה',
    district: 'השרון',
  },
  '218': {
    name: 'גני עם',
    district: 'פתח תקווה',
  },
  '219': {
    name: 'חיבת ציון',
    district: 'השרון',
  },
  '220': {
    name: 'כפר ביאליק',
    district: 'חיפה',
  },
  '223': {
    name: 'עין עירון',
    district: 'חדרה',
  },
  '224': {
    name: 'שושנת העמקים',
    district: 'השרון',
  },
  '225': {
    name: 'גן השומרון',
    district: 'חדרה',
  },
  '229': {
    name: 'גני תקווה',
    district: 'פתח תקווה',
  },
  '230': {
    name: 'מעש',
    district: 'פתח תקווה',
  },
  '232': {
    name: 'שפיים',
    district: 'השרון',
  },
  '233': {
    name: 'כפר ידידיה',
    district: 'השרון',
  },
  '234': {
    name: 'ביצרון',
    district: 'אשקלון',
  },
  '235': {
    name: 'חבצלת השרון',
    district: 'השרון',
  },
  '237': {
    name: 'שער העמקים',
    district: 'חיפה',
  },
  '239': {
    name: 'גן חיים',
    district: 'פתח תקווה',
  },
  '240': {
    name: 'יקנעם עילית',
    district: 'עפולה',
  },
  '241': {
    name: 'יקנעם (מושבה)',
    district: 'עפולה',
  },
  '242': {
    name: 'בית השיטה',
    district: 'עפולה',
  },
  '246': {
    name: 'נתיבות',
    district: 'באר שבע',
  },
  '247': {
    name: 'רשפון',
    district: 'השרון',
  },
  '248': {
    name: 'בית שערים',
    district: 'עפולה',
  },
  '249': {
    name: 'כפר סירקין',
    district: 'פתח תקווה',
  },
  '250': {
    name: 'הזורע',
    district: 'עפולה',
  },
  '252': {
    name: 'ביתן אהרן',
    district: 'השרון',
  },
  '253': {
    name: 'חולתה',
    district: 'צפת',
  },
  '254': {
    name: 'כפר המכבי',
    district: 'חיפה',
  },
  '255': {
    name: 'כפר חיטים',
    district: 'כנרת',
  },
  '256': {
    name: 'ניר דוד (תל עמל)',
    district: 'עפולה',
  },
  '257': {
    name: 'נופך',
    district: 'פתח תקווה',
  },
  '259': {
    name: 'שדה נחום',
    district: 'עפולה',
  },
  '262': {
    name: 'גינוסר',
    district: 'כנרת',
  },
  '263': {
    name: 'מסדה',
    district: 'כנרת',
  },
  '264': {
    name: 'שער הגולן',
    district: 'כנרת',
  },
  '265': {
    name: 'בית יוסף',
    district: 'עפולה',
  },
  '267': {
    name: 'כפר שמריהו',
    district: 'תל אביב',
  },
  '268': {
    name: 'טירת צבי',
    district: 'עפולה',
  },
  '269': {
    name: 'מולדת',
    district: 'עפולה',
  },
  '270': {
    name: 'עין השופט',
    district: 'עפולה',
  },
  '272': {
    name: 'מעוז חיים',
    district: 'עפולה',
  },
  '273': {
    name: 'עין גב',
    district: 'כנרת',
  },
  '274': {
    name: 'כפר מנחם',
    district: 'אשקלון',
  },
  '276': {
    name: 'צור משה',
    district: 'השרון',
  },
  '278': {
    name: 'אושה',
    district: 'חיפה',
  },
  '280': {
    name: 'חניתה',
    district: 'עכו',
  },
  '281': {
    name: 'פקיעין חדשה',
    district: 'עכו',
  },
  '282': {
    name: 'שבי ציון',
    district: 'עכו',
  },
  '284': {
    name: 'שדה ורבורג',
    district: 'פתח תקווה',
  },
  '285': {
    name: 'אלונים',
    district: 'עפולה',
  },
  '286': {
    name: 'מעלה החמישה',
    district: 'ירושלים',
  },
  '287': {
    name: 'תל יצחק',
    district: 'השרון',
  },
  '288': {
    name: 'בית יהושע',
    district: 'השרון',
  },
  '289': {
    name: 'עין המפרץ',
    district: 'עכו',
  },
  '290': {
    name: 'מעין צבי',
    district: 'חדרה',
  },
  '292': {
    name: 'שרונה',
    district: 'כנרת',
  },
  '293': {
    name: 'שדה יואב',
    district: 'אשקלון',
  },
  '294': {
    name: 'אילון',
    district: 'עכו',
  },
  '295': {
    name: 'כפר רופין',
    district: 'עפולה',
  },
  '296': {
    name: 'נווה איתן',
    district: 'עפולה',
  },
  '297': {
    name: 'כפר מסריק',
    district: 'עכו',
  },
  '298': {
    name: 'מסילות',
    district: 'עפולה',
  },
  '300': {
    name: 'דליה',
    district: 'עפולה',
  },
  '301': {
    name: 'בית עוזיאל',
    district: 'רמלה',
  },
  '302': {
    name: 'דפנה',
    district: 'צפת',
  },
  '303': {
    name: 'דן',
    district: 'צפת',
  },
  '304': {
    name: 'שדה אליהו',
    district: 'עפולה',
  },
  '305': {
    name: 'גשר',
    district: 'כנרת',
  },
  '306': {
    name: 'שדמות דבורה',
    district: 'כנרת',
  },
  '307': {
    name: 'הזורעים',
    district: 'כנרת',
  },
  '308': {
    name: 'מחניים',
    district: 'צפת',
  },
  '309': {
    name: 'נהורה',
    district: 'אשקלון',
  },
  '310': {
    name: 'כפר גליקסון',
    district: 'חדרה',
  },
  '311': {
    name: 'גן שורק',
    district: 'רחובות',
  },
  '312': {
    name: 'נווה ים',
    district: 'חדרה',
  },
  '313': {
    name: 'אפק',
    district: 'עכו',
  },
  '315': {
    name: 'נגבה',
    district: 'אשקלון',
  },
  '316': {
    name: 'כפר נטר',
    district: 'השרון',
  },
  '317': {
    name: 'בית אורן',
    district: 'חדרה',
  },
  '318': {
    name: 'עמיעוז',
    district: 'באר שבע',
  },
  '319': {
    name: 'עמיר',
    district: 'צפת',
  },
  '320': {
    name: 'כפר ורבורג',
    district: 'אשקלון',
  },
  '322': {
    name: 'בית הלל',
    district: 'צפת',
  },
  '324': {
    name: 'שאר ישוב',
    district: 'צפת',
  },
  '325': {
    name: 'מצובה',
    district: 'עכו',
  },
  '326': {
    name: 'בית יצחק-שער חפר',
    district: 'השרון',
  },
  '327': {
    name: 'שדות ים',
    district: 'חדרה',
  },
  '328': {
    name: 'עזוז',
    district: 'באר שבע',
  },
  '329': {
    name: 'שדה נחמיה',
    district: 'צפת',
  },
  '330': {
    name: 'אלומות',
    district: 'כנרת',
  },
  '331': {
    name: 'ניר צבי',
    district: 'רמלה',
  },
  '334': {
    name: 'קבוצת יבנה',
    district: 'רחובות',
  },
  '335': {
    name: 'רמת השופט',
    district: 'עפולה',
  },
  '336': {
    name: 'דורות',
    district: 'אשקלון',
  },
  '338': {
    name: 'איבים',
    district: 'אשקלון',
  },
  '339': {
    name: 'רמת צבי',
    district: 'עפולה',
  },
  '340': {
    name: 'גת (קיבוץ)',
    district: 'אשקלון',
  },
  '342': {
    name: 'גברעם',
    district: 'אשקלון',
  },
  '343': {
    name: 'חמדיה',
    district: 'עפולה',
  },
  '344': {
    name: 'מענית',
    district: 'חדרה',
  },
  '345': {
    name: 'כפר סאלד',
    district: 'צפת',
  },
  '346': {
    name: 'גליל ים',
    district: 'תל אביב',
  },
  '347': {
    name: 'מנרה',
    district: 'צפת',
  },
  '348': {
    name: 'ניר עם',
    district: 'אשקלון',
  },
  '351': {
    name: 'ניצן',
    district: 'אשקלון',
  },
  '352': {
    name: 'גבולות',
    district: 'באר שבע',
  },
  '353': {
    name: 'בית זיד',
    district: 'עפולה',
  },
  '354': {
    name: 'רביבים',
    district: 'באר שבע',
  },
  '355': {
    name: 'חורשים',
    district: 'פתח תקווה',
  },
  '356': {
    name: 'הגושרים',
    district: 'צפת',
  },
  '357': {
    name: 'כפר בלום',
    district: 'צפת',
  },
  '358': {
    name: 'יד מרדכי',
    district: 'אשקלון',
  },
  '359': {
    name: 'ניצנים',
    district: 'אשקלון',
  },
  '360': {
    name: 'גבעת ניל"י',
    district: 'חדרה',
  },
  '362': {
    name: 'רוחמה',
    district: 'אשקלון',
  },
  '363': {
    name: 'חפץ חיים',
    district: 'רחובות',
  },
  '364': {
    name: 'כפר אוריה',
    district: 'ירושלים',
  },
  '365': {
    name: 'בית קשת',
    district: 'כנרת',
  },
  '366': {
    name: 'שמיר',
    district: 'צפת',
  },
  '367': {
    name: 'עין העמק',
    district: 'עפולה',
  },
  '368': {
    name: 'ביריה',
    district: 'צפת',
  },
  '369': {
    name: 'גלעד (אבן יצחק)',
    district: 'עפולה',
  },
  '370': {
    name: 'גזר',
    district: 'רמלה',
  },
  '371': {
    name: 'כדורי',
    district: 'כנרת',
  },
  '372': {
    name: 'רמות נפתלי',
    district: 'צפת',
  },
  '373': {
    name: 'בית הלוי',
    district: 'השרון',
  },
  '374': {
    name: 'חוקוק',
    district: 'כנרת',
  },
  '375': {
    name: 'מגל',
    district: 'חדרה',
  },
  '376': {
    name: 'עברון',
    district: 'עכו',
  },
  '377': {
    name: 'המעפיל',
    district: 'השרון',
  },
  '378': {
    name: 'משגב עם',
    district: 'צפת',
  },
  '379': {
    name: 'גאולים',
    district: 'השרון',
  },
  '380': {
    name: 'להבות הבשן',
    district: 'צפת',
  },
  '382': {
    name: 'מכמורת',
    district: 'השרון',
  },
  '383': {
    name: 'עין הנצי"ב',
    district: 'עפולה',
  },
  '385': {
    name: 'עמיעד',
    district: 'צפת',
  },
  '386': {
    name: 'בני דרור',
    district: 'השרון',
  },
  '387': {
    name: 'כפר מונש',
    district: 'השרון',
  },
  '388': {
    name: 'כפר קיש',
    district: 'כנרת',
  },
  '389': {
    name: 'בצרה',
    district: 'השרון',
  },
  '390': {
    name: 'רגבה',
    district: 'עכו',
  },
  '392': {
    name: 'קדמה',
    district: 'אשקלון',
  },
  '393': {
    name: 'גלאון',
    district: 'אשקלון',
  },
  '394': {
    name: 'שובל',
    district: 'באר שבע',
  },
  '395': {
    name: 'משמר הנגב',
    district: 'באר שבע',
  },
  '396': {
    name: 'נבטים',
    district: 'באר שבע',
  },
  '397': {
    name: 'חצרים',
    district: 'באר שבע',
  },
  '398': {
    name: 'שרשרת',
    district: 'באר שבע',
  },
  '399': {
    name: 'בארי',
    district: 'באר שבע',
  },
  '400': {
    name: 'אבן שמואל',
    district: 'אשקלון',
  },
  '402': {
    name: 'ניר יצחק',
    district: 'באר שבע',
  },
  '403': {
    name: 'אורים',
    district: 'באר שבע',
  },
  '405': {
    name: 'נווה אילן',
    district: 'ירושלים',
  },
  '406': {
    name: 'חצור-אשדוד',
    district: 'אשקלון',
  },
  '407': {
    name: 'דברת',
    district: 'עפולה',
  },
  '408': {
    name: 'נאות מרדכי',
    district: 'צפת',
  },
  '409': {
    name: 'יחיעם',
    district: 'עכו',
  },
  '412': {
    name: 'קרית שלמה',
    district: 'השרון',
  },
  '413': {
    name: 'צאלים',
    district: 'באר שבע',
  },
  '414': {
    name: 'קלחים',
    district: 'באר שבע',
  },
  '415': {
    name: 'שוקדה',
    district: 'באר שבע',
  },
  '416': {
    name: 'מעין ברוך',
    district: 'צפת',
  },
  '417': {
    name: 'יקום',
    district: 'השרון',
  },
  '418': {
    name: 'בני ציון',
    district: 'השרון',
  },
  '419': {
    name: 'סעד',
    district: 'באר שבע',
  },
  '421': {
    name: 'משאבי שדה',
    district: 'באר שבע',
  },
  '422': {
    name: 'חרב לאת',
    district: 'השרון',
  },
  '423': {
    name: 'העוגן',
    district: 'השרון',
  },
  '424': {
    name: 'גבים',
    district: 'אשקלון',
  },
  '425': {
    name: 'משמרת',
    district: 'השרון',
  },
  '426': {
    name: 'עין כרמל',
    district: 'חדרה',
  },
  '427': {
    name: 'כפר גלים',
    district: 'חיפה',
  },
  '428': {
    name: 'ברור חיל',
    district: 'אשקלון',
  },
  '429': {
    name: 'אלוני אבא',
    district: 'עפולה',
  },
  '430': {
    name: 'בית לחם הגלילית',
    district: 'עפולה',
  },
  '431': {
    name: 'דלתון',
    district: 'צפת',
  },
  '432': {
    name: 'שמרת',
    district: 'עכו',
  },
  '433': {
    name: 'נחשולים',
    district: 'חדרה',
  },
  '434': {
    name: 'החותרים',
    district: 'חדרה',
  },
  '435': {
    name: 'נצר סרני',
    district: 'רמלה',
  },
  '436': {
    name: 'עין דור',
    district: 'עפולה',
  },
  '437': {
    name: 'רשפים',
    district: 'עפולה',
  },
  '439': {
    name: 'שלוחות',
    district: 'עפולה',
  },
  '440': {
    name: 'יסודות',
    district: 'רחובות',
  },
  '442': {
    name: 'גדעונה',
    district: 'עפולה',
  },
  '443': {
    name: 'כפר הנשיא',
    district: 'צפת',
  },
  '444': {
    name: 'רגבים',
    district: 'חדרה',
  },
  '445': {
    name: 'רמות מנשה',
    district: 'עפולה',
  },
  '446': {
    name: 'אודים',
    district: 'השרון',
  },
  '447': {
    name: 'נורדיה',
    district: 'השרון',
  },
  '448': {
    name: 'בני עטרות',
    district: 'פתח תקווה',
  },
  '449': {
    name: 'נחלים',
    district: 'פתח תקווה',
  },
  '450': {
    name: 'בארות יצחק',
    district: 'פתח תקווה',
  },
  '452': {
    name: 'יזרעאל',
    district: 'עפולה',
  },
  '453': {
    name: 'יפתח',
    district: 'צפת',
  },
  '454': {
    name: 'סער',
    district: 'עכו',
  },
  '456': {
    name: 'שורש',
    district: 'ירושלים',
  },
  '457': {
    name: 'גזית',
    district: 'עפולה',
  },
  '460': {
    name: 'רמת רזיאל',
    district: 'ירושלים',
  },
  '462': {
    name: 'טל שחר',
    district: 'ירושלים',
  },
  '463': {
    name: 'געתון',
    district: 'עכו',
  },
  '464': {
    name: 'הראל',
    district: 'ירושלים',
  },
  '465': {
    name: 'צובה',
    district: 'ירושלים',
  },
  '466': {
    name: 'בית דגן',
    district: 'רמלה',
  },
  '469': {
    name: 'קרית עקרון',
    district: 'רחובות',
  },
  '472': {
    name: 'אבו גוש',
    district: 'ירושלים',
  },
  '473': {
    name: 'אבו סנאן',
    district: 'עכו',
  },
  '475': {
    name: 'דחי',
    district: 'עפולה',
  },
  '478': {
    name: 'אכסאל',
    district: 'עפולה',
  },
  '480': {
    name: "בית ג'ן",
    district: 'עכו',
  },
  '481': {
    name: 'מגאר',
    district: 'כנרת',
  },
  '482': {
    name: "בועיינה-נוג'ידאת",
    district: 'נצרת',
  },
  '483': {
    name: 'בענה',
    district: 'עכו',
  },
  '485': {
    name: "ג'ולס",
    district: 'עכו',
  },
  '487': {
    name: "ג'ש (גוש חלב)",
    district: 'צפת',
  },
  '489': {
    name: 'דבוריה',
    district: 'עפולה',
  },
  '490': {
    name: 'דייר אל-אסד',
    district: 'עכו',
  },
  '492': {
    name: 'דייר חנא',
    district: 'עכו',
  },
  '493': {
    name: 'דייר ראפאת',
    district: 'ירושלים',
  },
  '494': {
    name: 'דאלית אל-כרמל',
    district: 'חיפה',
  },
  '496': {
    name: 'חורפיש',
    district: 'עכו',
  },
  '497': {
    name: 'טייבה (בעמק)',
    district: 'עפולה',
  },
  '498': {
    name: 'טורעאן',
    district: 'נצרת',
  },
  '499': {
    name: 'יפיע',
    district: 'נצרת',
  },
  '502': {
    name: 'ירכא',
    district: 'עכו',
  },
  '504': {
    name: 'כאבול',
    district: 'עכו',
  },
  '505': {
    name: "כאוכב אבו אל-היג'א",
    district: 'עכו',
  },
  '507': {
    name: 'כפר יאסיף',
    district: 'עכו',
  },
  '508': {
    name: 'כפר כמא',
    district: 'כנרת',
  },
  '509': {
    name: 'כפר כנא',
    district: 'נצרת',
  },
  '510': {
    name: 'כפר מנדא',
    district: 'עכו',
  },
  '511': {
    name: 'עילוט',
    district: 'נצרת',
  },
  '512': {
    name: 'כפר מצר',
    district: 'נצרת',
  },
  '514': {
    name: 'עין ראפה',
    district: 'ירושלים',
  },
  '516': {
    name: "מג'ד אל-כרום",
    district: 'עכו',
  },
  '517': {
    name: 'מזרעה',
    district: 'עכו',
  },
  '518': {
    name: 'מעיליא',
    district: 'עכו',
  },
  '520': {
    name: 'משהד',
    district: 'נצרת',
  },
  '521': {
    name: 'עין נקובא',
    district: 'ירושלים',
  },
  '522': {
    name: 'נחף',
    district: 'עכו',
  },
  '523': {
    name: 'ניין',
    district: 'עפולה',
  },
  '524': {
    name: 'נאעורה',
    district: 'עפולה',
  },
  '525': {
    name: "סאג'ור",
    district: 'עכו',
  },
  '526': {
    name: 'סולם',
    district: 'עפולה',
  },
  '527': {
    name: 'שזור',
    district: 'עכו',
  },
  '528': {
    name: 'עוזייר',
    district: 'נצרת',
  },
  '529': {
    name: 'אעבלין',
    district: 'עכו',
  },
  '530': {
    name: 'עיילבון',
    district: 'כנרת',
  },
  '531': {
    name: 'עראבה',
    district: 'עכו',
  },
  '532': {
    name: 'עין מאהל',
    district: 'נצרת',
  },
  '534': {
    name: 'עספיא',
    district: 'חיפה',
  },
  '535': {
    name: 'פסוטה',
    district: 'עכו',
  },
  '536': {
    name: 'פקיעין (בוקייעה)',
    district: 'עכו',
  },
  '537': {
    name: 'פוריידיס',
    district: 'חדרה',
  },
  '538': {
    name: 'שעב',
    district: 'עכו',
  },
  '539': {
    name: 'רומאנה',
    district: 'נצרת',
  },
  '540': {
    name: 'ריחאניה',
    district: 'צפת',
  },
  '541': {
    name: "ג'סר א-זרקא",
    district: 'חדרה',
  },
  '542': {
    name: 'ריינה',
    district: 'נצרת',
  },
  '543': {
    name: 'ראמה',
    district: 'עכו',
  },
  '546': {
    name: 'עין אל-אסד',
    district: 'עכו',
  },
  '547': {
    name: 'טמרה (יזרעאל)',
    district: 'עפולה',
  },
  '549': {
    name: 'גנות הדר',
    district: 'השרון',
  },
  '553': {
    name: 'ניר בנים',
    district: 'אשקלון',
  },
  '555': {
    name: 'שדמה',
    district: 'רחובות',
  },
  '559': {
    name: 'בוסתן הגליל',
    district: 'עכו',
  },
  '562': {
    name: 'בית אלעזרי',
    district: 'רחובות',
  },
  '563': {
    name: 'משמר דוד',
    district: 'רמלה',
  },
  '564': {
    name: 'רבדים',
    district: 'אשקלון',
  },
  '565': {
    name: 'אזור',
    district: 'חולון',
  },
  '566': {
    name: 'גבעת שמש',
    district: 'ירושלים',
  },
  '567': {
    name: 'צרעה',
    district: 'ירושלים',
  },
  '570': {
    name: 'מעונה',
    district: 'עכו',
  },
  '571': {
    name: 'בית גמליאל',
    district: 'רחובות',
  },
  '572': {
    name: 'בית העמק',
    district: 'עכו',
  },
  '573': {
    name: 'מבקיעים',
    district: 'אשקלון',
  },
  '574': {
    name: 'גשר הזיו',
    district: 'עכו',
  },
  '575': {
    name: 'יסעור',
    district: 'עכו',
  },
  '576': {
    name: 'כברי',
    district: 'עכו',
  },
  '577': {
    name: 'יד בנימין',
    district: 'רחובות',
  },
  '578': {
    name: 'סאסא',
    district: 'צפת',
  },
  '579': {
    name: 'כפר ראש הנקרה',
    district: 'עכו',
  },
  '580': {
    name: 'כרם מהר"ל',
    district: 'חדרה',
  },
  '582': {
    name: 'כפר הנגיד',
    district: 'רחובות',
  },
  '584': {
    name: 'זיקים',
    district: 'אשקלון',
  },
  '585': {
    name: 'לביא',
    district: 'כנרת',
  },
  '586': {
    name: 'מגידו',
    district: 'עפולה',
  },
  '587': {
    name: 'סביון',
    district: 'פתח תקווה',
  },
  '588': {
    name: 'בני ראם',
    district: 'רחובות',
  },
  '589': {
    name: 'בצת',
    district: 'עכו',
  },
  '590': {
    name: 'נווה אור',
    district: 'עפולה',
  },
  '591': {
    name: 'עשרת',
    district: 'רחובות',
  },
  '592': {
    name: 'בני דרום',
    district: 'רחובות',
  },
  '593': {
    name: 'ערוגות',
    district: 'אשקלון',
  },
  '594': {
    name: 'צפריה',
    district: 'רמלה',
  },
  '595': {
    name: 'לוחמי הגיטאות',
    district: 'עכו',
  },
  '596': {
    name: 'מלכיה',
    district: 'צפת',
  },
  '597': {
    name: 'פלמחים',
    district: 'רחובות',
  },
  '598': {
    name: 'בית קמה',
    district: 'באר שבע',
  },
  '599': {
    name: 'פרוד',
    district: 'צפת',
  },
  '602': {
    name: 'נירים',
    district: 'באר שבע',
  },
  '603': {
    name: 'אלקוש',
    district: 'עכו',
  },
  '604': {
    name: 'בית עריף',
    district: 'רמלה',
  },
  '605': {
    name: 'כפר שמאי',
    district: 'צפת',
  },
  '606': {
    name: 'מזור',
    district: 'פתח תקווה',
  },
  '607': {
    name: 'מירון',
    district: 'צפת',
  },
  '609': {
    name: 'כפר חושן',
    district: 'צפת',
  },
  '610': {
    name: 'סתריה',
    district: 'רמלה',
  },
  '612': {
    name: 'צרופה',
    district: 'חדרה',
  },
  '613': {
    name: 'ציפורי',
    district: 'עפולה',
  },
  '614': {
    name: 'שומרה',
    district: 'עכו',
  },
  '615': {
    name: 'קדרון',
    district: 'רחובות',
  },
  '616': {
    name: 'רינתיה',
    district: 'פתח תקווה',
  },
  '617': {
    name: 'ברקאי',
    district: 'חדרה',
  },
  '618': {
    name: 'חדיד',
    district: 'רמלה',
  },
  '619': {
    name: 'בית גוברין',
    district: 'אשקלון',
  },
  '620': {
    name: 'משואות יצחק',
    district: 'אשקלון',
  },
  '622': {
    name: 'עין צורים',
    district: 'אשקלון',
  },
  '623': {
    name: 'יראון',
    district: 'צפת',
  },
  '627': {
    name: "ג'לג'וליה",
    district: 'פתח תקווה',
  },
  '628': {
    name: "ג'ת",
    district: 'חדרה',
  },
  '633': {
    name: 'כפר ברא',
    district: 'פתח תקווה',
  },
  '634': {
    name: 'כפר קאסם',
    district: 'פתח תקווה',
  },
  '635': {
    name: 'מוקייבלה',
    district: 'עפולה',
  },
  '636': {
    name: 'צנדלה',
    district: 'עפולה',
  },
  '637': {
    name: 'ערערה',
    district: 'חדרה',
  },
  '638': {
    name: 'קלנסווה',
    district: 'השרון',
  },
  '648': {
    name: 'מצר',
    district: 'חדרה',
  },
  '649': {
    name: 'מייסר',
    district: 'חדרה',
  },
  '652': {
    name: 'אבטין',
    district: 'חיפה',
  },
  '654': {
    name: 'כפר קרע',
    district: 'חדרה',
  },
  '658': {
    name: "שייח' דנון",
    district: 'עכו',
  },
  '661': {
    name: 'שער אפרים',
    district: 'השרון',
  },
  '662': {
    name: 'חוסן',
    district: 'עכו',
  },
  '663': {
    name: 'טירת יהודה',
    district: 'פתח תקווה',
  },
  '664': {
    name: 'כרם בן זמרה',
    district: 'צפת',
  },
  '665': {
    name: 'תקומה',
    district: 'באר שבע',
  },
  '666': {
    name: 'עומר',
    district: 'באר שבע',
  },
  '667': {
    name: 'ברעם',
    district: 'צפת',
  },
  '668': {
    name: 'מפלסים',
    district: 'אשקלון',
  },
  '670': {
    name: 'משמר איילון',
    district: 'רמלה',
  },
  '672': {
    name: 'בית נקופה',
    district: 'ירושלים',
  },
  '673': {
    name: 'כפר טרומן',
    district: 'רמלה',
  },
  '674': {
    name: 'לימן',
    district: 'עכו',
  },
  '675': {
    name: 'הבונים',
    district: 'חדרה',
  },
  '676': {
    name: 'עין השלושה',
    district: 'באר שבע',
  },
  '677': {
    name: 'הסוללים',
    district: 'עפולה',
  },
  '678': {
    name: 'מעגן',
    district: 'כנרת',
  },
  '679': {
    name: 'אביאל',
    district: 'חדרה',
  },
  '680': {
    name: 'אומץ',
    district: 'השרון',
  },
  '681': {
    name: 'גבעת שמואל',
    district: 'פתח תקווה',
  },
  '682': {
    name: 'אליקים',
    district: 'עפולה',
  },
  '683': {
    name: 'גבע כרמל',
    district: 'חדרה',
  },
  '684': {
    name: 'היוגב',
    district: 'עפולה',
  },
  '685': {
    name: 'בניה',
    district: 'רחובות',
  },
  '686': {
    name: 'נווה ימין',
    district: 'פתח תקווה',
  },
  '687': {
    name: 'עין איילה',
    district: 'חדרה',
  },
  '688': {
    name: 'עלמה',
    district: 'צפת',
  },
  '689': {
    name: 'מגדים',
    district: 'חדרה',
  },
  '690': {
    name: 'כפר אחים',
    district: 'אשקלון',
  },
  '692': {
    name: 'שפיר',
    district: 'אשקלון',
  },
  '693': {
    name: 'נתיב הל"ה',
    district: 'ירושלים',
  },
  '694': {
    name: 'מעגן מיכאל',
    district: 'חדרה',
  },
  '695': {
    name: 'מגן',
    district: 'באר שבע',
  },
  '696': {
    name: 'כפר חב"ד',
    district: 'רמלה',
  },
  '697': {
    name: 'בארותיים',
    district: 'השרון',
  },
  '698': {
    name: 'בורגתה',
    district: 'השרון',
  },
  '699': {
    name: 'ניר ישראל',
    district: 'אשקלון',
  },
  '700': {
    name: 'חצב',
    district: 'אשקלון',
  },
  '701': {
    name: 'ארבל',
    district: 'כנרת',
  },
  '702': {
    name: 'האון',
    district: 'כנרת',
  },
  '703': {
    name: 'גבעת עוז',
    district: 'עפולה',
  },
  '705': {
    name: 'נחשונים',
    district: 'פתח תקווה',
  },
  '706': {
    name: 'גיאה',
    district: 'אשקלון',
  },
  '707': {
    name: 'כפר דניאל',
    district: 'רמלה',
  },
  '708': {
    name: 'עמקה',
    district: 'עכו',
  },
  '709': {
    name: 'תפרח',
    district: 'באר שבע',
  },
  '710': {
    name: 'בית זית',
    district: 'ירושלים',
  },
  '711': {
    name: 'עזריה',
    district: 'רמלה',
  },
  '712': {
    name: 'בן עמי',
    district: 'עכו',
  },
  '713': {
    name: 'רעים',
    district: 'באר שבע',
  },
  '714': {
    name: 'ארז',
    district: 'אשקלון',
  },
  '715': {
    name: 'להבות חביבה',
    district: 'חדרה',
  },
  '716': {
    name: 'אייל',
    district: 'פתח תקווה',
  },
  '717': {
    name: 'חגור',
    district: 'פתח תקווה',
  },
  '718': {
    name: 'ירחיב',
    district: 'פתח תקווה',
  },
  '719': {
    name: 'תל קציר',
    district: 'כנרת',
  },
  '720': {
    name: 'ניר גלים',
    district: 'רחובות',
  },
  '721': {
    name: 'שדה אילן',
    district: 'כנרת',
  },
  '722': {
    name: 'מגשימים',
    district: 'פתח תקווה',
  },
  '723': {
    name: 'בית הגדי',
    district: 'באר שבע',
  },
  '726': {
    name: 'הודיה',
    district: 'אשקלון',
  },
  '727': {
    name: 'תלמי יחיאל',
    district: 'אשקלון',
  },
  '729': {
    name: 'משמר השבעה',
    district: 'רמלה',
  },
  '730': {
    name: 'אליפלט',
    district: 'צפת',
  },
  '731': {
    name: 'מישר',
    district: 'רחובות',
  },
  '732': {
    name: 'משמר הירדן',
    district: 'צפת',
  },
  '734': {
    name: 'גן יאשיה',
    district: 'השרון',
  },
  '735': {
    name: 'רמות מאיר',
    district: 'רמלה',
  },
  '736': {
    name: 'גילת',
    district: 'באר שבע',
  },
  '737': {
    name: 'עולש',
    district: 'השרון',
  },
  '738': {
    name: 'דור',
    district: 'חדרה',
  },
  '739': {
    name: 'שדה עוזיהו',
    district: 'אשקלון',
  },
  '740': {
    name: 'אשתאול',
    district: 'ירושלים',
  },
  '741': {
    name: 'שואבה',
    district: 'ירושלים',
  },
  '742': {
    name: 'מסילת ציון',
    district: 'ירושלים',
  },
  '743': {
    name: 'כפר שמואל',
    district: 'רמלה',
  },
  '744': {
    name: 'תלמי יפה',
    district: 'אשקלון',
  },
  '745': {
    name: 'גמזו',
    district: 'רמלה',
  },
  '746': {
    name: 'ברכיה',
    district: 'אשקלון',
  },
  '747': {
    name: 'בית שקמה',
    district: 'אשקלון',
  },
  '748': {
    name: 'מסלול',
    district: 'באר שבע',
  },
  '749': {
    name: 'פטיש',
    district: 'באר שבע',
  },
  '750': {
    name: 'פדויים',
    district: 'באר שבע',
  },
  '751': {
    name: 'בית מאיר',
    district: 'ירושלים',
  },
  '752': {
    name: 'תעוז',
    district: 'ירושלים',
  },
  '753': {
    name: 'ינוב',
    district: 'השרון',
  },
  '755': {
    name: 'גורן',
    district: 'עכו',
  },
  '756': {
    name: 'בית עזרא',
    district: 'אשקלון',
  },
  '757': {
    name: 'מצליח',
    district: 'רמלה',
  },
  '758': {
    name: 'יד חנה',
    district: 'השרון',
  },
  '759': {
    name: 'יציץ',
    district: 'רמלה',
  },
  '760': {
    name: 'בן זכאי',
    district: 'רחובות',
  },
  '761': {
    name: 'שובה',
    district: 'באר שבע',
  },
  '762': {
    name: 'בטחה',
    district: 'באר שבע',
  },
  '763': {
    name: 'שתולים',
    district: 'אשקלון',
  },
  '764': {
    name: 'כפר מרדכי',
    district: 'רחובות',
  },
  '765': {
    name: 'משגב דב',
    district: 'רחובות',
  },
  '766': {
    name: 'קוממיות',
    district: 'אשקלון',
  },
  '767': {
    name: 'פורת',
    district: 'השרון',
  },
  '768': {
    name: 'כרמיה',
    district: 'אשקלון',
  },
  '769': {
    name: 'ניר עציון',
    district: 'חדרה',
  },
  '771': {
    name: 'מבוא ביתר',
    district: 'ירושלים',
  },
  '772': {
    name: 'אמונים',
    district: 'אשקלון',
  },
  '773': {
    name: 'עמיקם',
    district: 'חדרה',
  },
  '774': {
    name: 'צוריאל',
    district: 'עכו',
  },
  '775': {
    name: 'יד נתן',
    district: 'אשקלון',
  },
  '776': {
    name: 'מחסיה',
    district: 'ירושלים',
  },
  '777': {
    name: 'נחשון',
    district: 'ירושלים',
  },
  '778': {
    name: 'תרום',
    district: 'ירושלים',
  },
  '779': {
    name: 'עמינדב',
    district: 'ירושלים',
  },
  '780': {
    name: 'אורה',
    district: 'ירושלים',
  },
  '783': {
    name: 'אבן ספיר',
    district: 'ירושלים',
  },
  '784': {
    name: 'בית נחמיה',
    district: 'רמלה',
  },
  '785': {
    name: 'אחיהוד',
    district: 'עכו',
  },
  '786': {
    name: 'כפר זיתים',
    district: 'כנרת',
  },
  '787': {
    name: 'גבעת יערים',
    district: 'ירושלים',
  },
  '788': {
    name: 'זיתן',
    district: 'רמלה',
  },
  '789': {
    name: 'רנן',
    district: 'באר שבע',
  },
  '791': {
    name: 'משען',
    district: 'אשקלון',
  },
  '792': {
    name: 'נתיב השיירה',
    district: 'עכו',
  },
  '793': {
    name: 'גבעתי',
    district: 'אשקלון',
  },
  '794': {
    name: 'עגור',
    district: 'ירושלים',
  },
  '795': {
    name: 'יערה',
    district: 'עכו',
  },
  '796': {
    name: 'צלפון',
    district: 'ירושלים',
  },
  '797': {
    name: 'אחיעזר',
    district: 'רמלה',
  },
  '798': {
    name: 'יגל',
    district: 'רמלה',
  },
  '799': {
    name: 'זכריה',
    district: 'ירושלים',
  },
  '800': {
    name: 'בית חנניה',
    district: 'חדרה',
  },
  '801': {
    name: 'חמד',
    district: 'רמלה',
  },
  '802': {
    name: 'גבעת כ"ח',
    district: 'פתח תקווה',
  },
  '803': {
    name: 'יושיביה',
    district: 'באר שבע',
  },
  '804': {
    name: 'אחיסמך',
    district: 'רמלה',
  },
  '805': {
    name: 'ישעי',
    district: 'ירושלים',
  },
  '806': {
    name: 'עין יהב',
    district: 'באר שבע',
  },
  '807': {
    name: 'חניאל',
    district: 'השרון',
  },
  '808': {
    name: 'ניר אליהו',
    district: 'פתח תקווה',
  },
  '809': {
    name: 'נחם',
    district: 'ירושלים',
  },
  '810': {
    name: 'עופר',
    district: 'חדרה',
  },
  '811': {
    name: 'יכיני',
    district: 'אשקלון',
  },
  '812': {
    name: 'שלומי',
    district: 'עכו',
  },
  '813': {
    name: 'עין יעקב',
    district: 'עכו',
  },
  '814': {
    name: 'תלמים',
    district: 'אשקלון',
  },
  '815': {
    name: 'זבדיאל',
    district: 'אשקלון',
  },
  '816': {
    name: 'זנוח',
    district: 'ירושלים',
  },
  '817': {
    name: 'עזריקם',
    district: 'אשקלון',
  },
  '818': {
    name: 'זרחיה',
    district: 'אשקלון',
  },
  '819': {
    name: 'אביגדור',
    district: 'אשקלון',
  },
  '820': {
    name: 'חלץ',
    district: 'אשקלון',
  },
  '821': {
    name: 'אחוזם',
    district: 'אשקלון',
  },
  '822': {
    name: 'מטע',
    district: 'ירושלים',
  },
  '823': {
    name: 'בר גיורא',
    district: 'ירושלים',
  },
  '824': {
    name: 'כוכב מיכאל',
    district: 'אשקלון',
  },
  '825': {
    name: 'נס הרים',
    district: 'ירושלים',
  },
  '826': {
    name: 'עוזה',
    district: 'אשקלון',
  },
  '827': {
    name: 'נווה מבטח',
    district: 'אשקלון',
  },
  '828': {
    name: 'ישרש',
    district: 'רמלה',
  },
  '829': {
    name: 'מבטחים',
    district: 'באר שבע',
  },
  '831': {
    name: 'ירוחם',
    district: 'באר שבע',
  },
  '833': {
    name: 'נורית',
    district: 'עפולה',
  },
  '836': {
    name: 'גנות',
    district: 'רמלה',
  },
  '837': {
    name: 'עזריאל',
    district: 'השרון',
  },
  '838': {
    name: 'פדיה',
    district: 'רמלה',
  },
  '839': {
    name: 'פתחיה',
    district: 'רמלה',
  },
  '840': {
    name: 'כיסופים',
    district: 'באר שבע',
  },
  '841': {
    name: 'אלישמע',
    district: 'פתח תקווה',
  },
  '842': {
    name: 'געש',
    district: 'השרון',
  },
  '843': {
    name: 'מרגליות',
    district: 'צפת',
  },
  '844': {
    name: 'נחל עוז',
    district: 'אשקלון',
  },
  '845': {
    name: 'כפר עזה',
    district: 'אשקלון',
  },
  '846': {
    name: 'שפר',
    district: 'צפת',
  },
  '848': {
    name: 'בית רבן',
    district: 'רחובות',
  },
  '849': {
    name: 'דבירה',
    district: 'באר שבע',
  },
  '850': {
    name: 'אחיטוב',
    district: 'השרון',
  },
  '851': {
    name: 'ניצני עוז',
    district: 'השרון',
  },
  '852': {
    name: 'גונן',
    district: 'צפת',
  },
  '853': {
    name: 'גאליה',
    district: 'רחובות',
  },
  '854': {
    name: 'רחוב',
    district: 'עפולה',
  },
  '856': {
    name: 'שעלבים',
    district: 'רמלה',
  },
  '857': {
    name: 'כפר אביב',
    district: 'רחובות',
  },
  '858': {
    name: 'נווה ירק',
    district: 'פתח תקווה',
  },
  '859': {
    name: 'כסלון',
    district: 'ירושלים',
  },
  '861': {
    name: 'שדה אליעזר',
    district: 'צפת',
  },
  '862': {
    name: 'גני יוחנן',
    district: 'רחובות',
  },
  '863': {
    name: 'גינתון',
    district: 'רמלה',
  },
  '864': {
    name: 'בקוע',
    district: 'ירושלים',
  },
  '865': {
    name: 'שיבולים',
    district: 'באר שבע',
  },
  '866': {
    name: 'יטבתה',
    district: 'באר שבע',
  },
  '868': {
    name: 'אלוני יצחק',
    district: 'חדרה',
  },
  '870': {
    name: 'גבעת השלושה',
    district: 'פתח תקווה',
  },
  '871': {
    name: 'עינת',
    district: 'פתח תקווה',
  },
  '872': {
    name: 'גאולי תימן',
    district: 'השרון',
  },
  '873': {
    name: 'שלווה',
    district: 'אשקלון',
  },
  '874': {
    name: 'מגדל העמק',
    district: 'עפולה',
  },
  '875': {
    name: 'כפר עבודה',
    district: 'השרון',
  },
  '877': {
    name: 'בית חירות',
    district: 'השרון',
  },
  '880': {
    name: 'עין שריד',
    district: 'השרון',
  },
  '882': {
    name: 'אורנים',
    district: 'חיפה',
  },
  '885': {
    name: 'שדה בוקר',
    district: 'באר שבע',
  },
  '886': {
    name: 'איתנים',
    district: 'ירושלים',
  },
  '888': {
    name: 'כפר הרי"ף',
    district: 'אשקלון',
  },
  '889': {
    name: "כפר חסידים ב'",
    district: 'חיפה',
  },
  '890': {
    name: 'כפר הנוער הדתי',
    district: 'חיפה',
  },
  '892': {
    name: 'עבדון',
    district: 'עכו',
  },
  '897': {
    name: 'מדרשת רופין',
    district: 'השרון',
  },
  '913': {
    name: 'שבלי - אום אל-גנם',
    district: 'עפולה',
  },
  '916': {
    name: 'ישע',
    district: 'באר שבע',
  },
  '917': {
    name: 'עצמון שגב',
    district: 'עכו',
  },
  '919': {
    name: 'גבעת ישעיהו',
    district: 'ירושלים',
  },
  '921': {
    name: 'שער מנשה',
    district: 'חדרה',
  },
  '922': {
    name: 'רכסים',
    district: 'חיפה',
  },
  '926': {
    name: 'נווה אבות',
    district: 'חדרה',
  },
  '932': {
    name: 'אבו עמרה (שבט)',
    district: 'באר שבע',
  },
  '935': {
    name: 'אבו סריחאן (שבט)',
    district: 'באר שבע',
  },
  '939': {
    name: 'מסעודין אל-עזאזמה',
    district: 'באר שבע',
  },
  '942': {
    name: 'סואעד (חמרייה)',
    district: 'עכו',
  },
  '944': {
    name: 'בסמת טבעון',
    district: 'עפולה',
  },
  '948': {
    name: "חוג'ייראת (ד'הרה)",
    district: 'עכו',
  },
  '956': {
    name: 'הוזייל (שבט)',
    district: 'באר שבע',
  },
  '957': {
    name: 'עוקבי (בנו עוקבה)',
    district: 'באר שבע',
  },
  '958': {
    name: 'אבו עבדון (שבט)',
    district: 'באר שבע',
  },
  '959': {
    name: 'אפיניש (שבט)',
    district: 'באר שבע',
  },
  '960': {
    name: 'אסד (שבט)',
    district: 'באר שבע',
  },
  '961': {
    name: 'אבו רוקייק (שבט)',
    district: 'באר שבע',
  },
  '962': {
    name: 'טובא-זנגריה',
    district: 'צפת',
  },
  '963': {
    name: 'אעצם (שבט)',
    district: 'באר שבע',
  },
  '964': {
    name: 'קודייראת א-צאנע(שבט)',
    district: 'באר שבע',
  },
  '965': {
    name: 'אטרש (שבט)',
    district: 'באר שבע',
  },
  '966': {
    name: 'אבו רובייעה (שבט)',
    district: 'באר שבע',
  },
  '967': {
    name: "אבו ג'ווייעד (שבט)",
    district: 'באר שבע',
  },
  '968': {
    name: 'אבו קורינאת (שבט)',
    district: 'באר שבע',
  },
  '969': {
    name: 'עטאוונה (שבט)',
    district: 'באר שבע',
  },
  '970': {
    name: 'תראבין א-צאנע (שבט)',
    district: 'באר שבע',
  },
  '972': {
    name: 'קוואעין (שבט)',
    district: 'באר שבע',
  },
  '975': {
    name: 'זרזיר',
    district: 'עפולה',
  },
  '976': {
    name: "ג'נאביב (שבט)",
    district: 'באר שבע',
  },
  '978': {
    name: "כעביה-טבאש-חג'אג'רה",
    district: 'נצרת',
  },
  '986': {
    name: "ח'ואלד (שבט)",
    district: 'נצרת',
  },
  '989': {
    name: 'סואעד (כמאנה) (שבט)',
    district: 'עכו',
  },
  '990': {
    name: 'ראס עלי',
    district: 'חיפה',
  },
  '993': {
    name: 'חמאם',
    district: 'כנרת',
  },
  '994': {
    name: 'מנשית זבדה',
    district: 'נצרת',
  },
  '997': {
    name: 'רומת הייב',
    district: 'נצרת',
  },
  '998': {
    name: 'ביר אל-מכסור',
    district: 'עכו',
  },
  '1015': {
    name: 'מבשרת ציון',
    district: 'ירושלים',
  },
  '1020': {
    name: 'אור עקיבא',
    district: 'חדרה',
  },
  '1024': {
    name: 'חרוצים',
    district: 'השרון',
  },
  '1031': {
    name: 'שדרות',
    district: 'אשקלון',
  },
  '1034': {
    name: 'קרית מלאכי',
    district: 'אשקלון',
  },
  '1041': {
    name: 'נצאצרה (שבט)',
    district: 'באר שבע',
  },
  '1042': {
    name: 'אבו עמאר (שבט)',
    district: 'באר שבע',
  },
  '1043': {
    name: 'גיזו',
    district: 'ירושלים',
  },
  '1044': {
    name: 'יעף',
    district: 'השרון',
  },
  '1045': {
    name: 'שתולה',
    district: 'עכו',
  },
  '1046': {
    name: 'אוהד',
    district: 'באר שבע',
  },
  '1047': {
    name: 'חזון',
    district: 'כנרת',
  },
  '1050': {
    name: 'בית חשמונאי',
    district: 'רמלה',
  },
  '1051': {
    name: 'תלמי אליהו',
    district: 'באר שבע',
  },
  '1052': {
    name: 'קטורה',
    district: 'באר שבע',
  },
  '1053': {
    name: 'עין חצבה',
    district: 'באר שבע',
  },
  '1054': {
    name: 'תל שבע',
    district: 'באר שבע',
  },
  '1056': {
    name: 'עין כרם-בי"ס חקלאי',
    district: 'ירושלים',
  },
  '1057': {
    name: 'נווה זוהר',
    district: 'באר שבע',
  },
  '1058': {
    name: 'שדה ניצן',
    district: 'באר שבע',
  },
  '1059': {
    name: 'כסיפה',
    district: 'באר שבע',
  },
  '1060': {
    name: 'לקיה',
    district: 'באר שבע',
  },
  '1061': {
    name: 'נוף הגליל',
    district: 'נצרת',
  },
  '1063': {
    name: 'מעלות-תרשיחא',
    district: 'עכו',
  },
  '1064': {
    name: 'אמירים',
    district: 'צפת',
  },
  '1065': {
    name: 'זמרת',
    district: 'באר שבע',
  },
  '1066': {
    name: 'בני עי"ש',
    district: 'רחובות',
  },
  '1067': {
    name: 'דוב"ב',
    district: 'צפת',
  },
  '1068': {
    name: 'אדמית',
    district: 'עכו',
  },
  '1069': {
    name: 'רם-און',
    district: 'עפולה',
  },
  '1070': {
    name: 'אביעזר',
    district: 'ירושלים',
  },
  '1071': {
    name: 'נווה מיכאל',
    district: 'ירושלים',
  },
  '1072': {
    name: 'גן הדרום',
    district: 'רחובות',
  },
  '1076': {
    name: 'בית ברל',
    district: 'פתח תקווה',
  },
  '1077': {
    name: 'גבעת שפירא',
    district: 'השרון',
  },
  '1079': {
    name: 'צפרירים',
    district: 'ירושלים',
  },
  '1080': {
    name: 'מבועים',
    district: 'באר שבע',
  },
  '1081': {
    name: 'אבן מנחם',
    district: 'עכו',
  },
  '1082': {
    name: 'מעגלים',
    district: 'באר שבע',
  },
  '1083': {
    name: 'תושיה',
    district: 'באר שבע',
  },
  '1084': {
    name: 'בן שמן (כפר נוער)',
    district: 'רמלה',
  },
  '1085': {
    name: 'כרם שלום',
    district: 'באר שבע',
  },
  '1094': {
    name: 'כרם יבנה (ישיבה)',
    district: 'רחובות',
  },
  '1095': {
    name: 'כפר מימון',
    district: 'באר שבע',
  },
  '1098': {
    name: 'מרכז שפירא',
    district: 'אשקלון',
  },
  '1102': {
    name: 'צוקי ים',
    district: 'השרון',
  },
  '1103': {
    name: 'גני הדר',
    district: 'רמלה',
  },
  '1104': {
    name: 'פוריה - כפר עבודה',
    district: 'כנרת',
  },
  '1105': {
    name: 'פוריה - נווה עובד',
    district: 'כנרת',
  },
  '1108': {
    name: 'אומן',
    district: 'עפולה',
  },
  '1110': {
    name: 'חבר',
    district: 'עפולה',
  },
  '1111': {
    name: 'צופיה',
    district: 'רחובות',
  },
  '1112': {
    name: 'יודפת',
    district: 'עכו',
  },
  '1113': {
    name: 'צור הדסה',
    district: 'ירושלים',
  },
  '1114': {
    name: 'שריגים (לי-און)',
    district: 'ירושלים',
  },
  '1115': {
    name: 'אביבים',
    district: 'צפת',
  },
  '1117': {
    name: 'יעל',
    district: 'עפולה',
  },
  '1123': {
    name: 'אדרת',
    district: 'ירושלים',
  },
  '1124': {
    name: 'נאות הכיכר',
    district: 'באר שבע',
  },
  '1125': {
    name: 'אלמגור',
    district: 'כנרת',
  },
  '1126': {
    name: 'אילות',
    district: 'באר שבע',
  },
  '1127': {
    name: 'מעלה גלבוע',
    district: 'עפולה',
  },
  '1128': {
    name: 'מי עמי',
    district: 'חדרה',
  },
  '1129': {
    name: 'גרופית',
    district: 'באר שבע',
  },
  '1130': {
    name: 'כפר רוזנואלד (זרעית)',
    district: 'עכו',
  },
  '1132': {
    name: 'שניר',
    district: 'צפת',
  },
  '1133': {
    name: 'ורדון',
    district: 'אשקלון',
  },
  '1134': {
    name: 'יד השמונה',
    district: 'ירושלים',
  },
  '1136': {
    name: 'צוחר',
    district: 'באר שבע',
  },
  '1137': {
    name: 'קרית יערים',
    district: 'ירושלים',
  },
  '1138': {
    name: 'יעד',
    district: 'עכו',
  },
  '1139': {
    name: 'כרמיאל',
    district: 'עכו',
  },
  '1140': {
    name: 'מדרשת בן גוריון',
    district: 'באר שבע',
  },
  '1141': {
    name: 'מבוא מודיעים',
    district: 'רמלה',
  },
  '1143': {
    name: 'נס עמים',
    district: 'עכו',
  },
  '1144': {
    name: 'ידידה',
    district: 'ירושלים',
  },
  '1145': {
    name: 'אלומה',
    district: 'אשקלון',
  },
  '1146': {
    name: 'עלומים',
    district: 'באר שבע',
  },
  '1147': {
    name: 'נטועה',
    district: 'עכו',
  },
  '1148': {
    name: 'צור נתן',
    district: 'פתח תקווה',
  },
  '1149': {
    name: 'עזר',
    district: 'אשקלון',
  },
  '1150': {
    name: 'צופר',
    district: 'באר שבע',
  },
  '1151': {
    name: 'פארן',
    district: 'באר שבע',
  },
  '1152': {
    name: 'אשלים',
    district: 'באר שבע',
  },
  '1153': {
    name: 'כישור',
    district: 'עכו',
  },
  '1154': {
    name: 'מלכישוע',
    district: 'עפולה',
  },
  '1155': {
    name: 'מגן שאול',
    district: 'עפולה',
  },
  '1156': {
    name: 'סמר',
    district: 'באר שבע',
  },
  '1157': {
    name: 'אחווה',
    district: 'אשקלון',
  },
  '1158': {
    name: 'יהל',
    district: 'באר שבע',
  },
  '1160': {
    name: 'שכניה',
    district: 'עכו',
  },
  '1161': {
    name: 'רהט',
    district: 'באר שבע',
  },
  '1162': {
    name: 'בית רימון',
    district: 'עפולה',
  },
  '1163': {
    name: 'מורן',
    district: 'עכו',
  },
  '1165': {
    name: 'שילת',
    district: 'רמלה',
  },
  '1166': {
    name: 'כפר רות',
    district: 'רמלה',
  },
  '1167': {
    name: 'קיסריה',
    district: 'חדרה',
  },
  '1169': {
    name: 'הוואשלה (שבט)',
    district: 'באר שבע',
  },
  '1170': {
    name: 'סייד (שבט)',
    district: 'באר שבע',
  },
  '1171': {
    name: 'לוטם',
    district: 'עכו',
  },
  '1172': {
    name: 'תובל',
    district: 'עכו',
  },
  '1173': {
    name: 'לפידות',
    district: 'עכו',
  },
  '1174': {
    name: 'מנוף',
    district: 'עכו',
  },
  '1175': {
    name: 'עידן',
    district: 'באר שבע',
  },
  '1176': {
    name: 'ספיר',
    district: 'באר שבע',
  },
  '1177': {
    name: 'טללים',
    district: 'באר שבע',
  },
  '1178': {
    name: 'מורשת',
    district: 'עכו',
  },
  '1179': {
    name: 'קורנית',
    district: 'עכו',
  },
  '1180': {
    name: 'צביה',
    district: 'עכו',
  },
  '1181': {
    name: 'טל-אל',
    district: 'עכו',
  },
  '1182': {
    name: 'אלון הגליל',
    district: 'עפולה',
  },
  '1183': {
    name: 'כליל',
    district: 'עכו',
  },
  '1184': {
    name: 'מתת',
    district: 'עכו',
  },
  '1185': {
    name: 'פלך',
    district: 'עכו',
  },
  '1186': {
    name: 'הושעיה',
    district: 'עפולה',
  },
  '1187': {
    name: 'עיר אובות',
    district: 'באר שבע',
  },
  '1188': {
    name: 'אשחר',
    district: 'עכו',
  },
  '1190': {
    name: 'מצפה נטופה',
    district: 'עפולה',
  },
  '1191': {
    name: 'בר יוחאי',
    district: 'צפת',
  },
  '1192': {
    name: 'ערערה-בנגב',
    district: 'באר שבע',
  },
  '1195': {
    name: 'ניצנה (קהילת חינוך)',
    district: 'באר שבע',
  },
  '1196': {
    name: 'מחנה יתיר',
    district: 'באר שבע',
  },
  '1197': {
    name: 'נאות סמדר',
    district: 'באר שבע',
  },
  '1198': {
    name: 'כרמים',
    district: 'באר שבע',
  },
  '1199': {
    name: 'עדי',
    district: 'עכו',
  },
  '1200': {
    name: 'מודיעין-מכבים-רעות',
    district: 'רמלה',
  },
  '1201': {
    name: 'כמון',
    district: 'עכו',
  },
  '1202': {
    name: 'מכמנים',
    district: 'עכו',
  },
  '1203': {
    name: 'הררית',
    district: 'עכו',
  },
  '1204': {
    name: 'גילון',
    district: 'עכו',
  },
  '1205': {
    name: 'מנות',
    district: 'עכו',
  },
  '1206': {
    name: 'גיתה',
    district: 'עכו',
  },
  '1207': {
    name: 'לבון',
    district: 'עכו',
  },
  '1208': {
    name: 'הילה',
    district: 'עכו',
  },
  '1209': {
    name: 'חרשים',
    district: 'עכו',
  },
  '1210': {
    name: 'כחל',
    district: 'צפת',
  },
  '1211': {
    name: 'קדרים',
    district: 'כנרת',
  },
  '1212': {
    name: 'עמוקה',
    district: 'צפת',
  },
  '1213': {
    name: 'צבעון',
    district: 'צפת',
  },
  '1214': {
    name: 'טפחות',
    district: 'כנרת',
  },
  '1219': {
    name: 'גורנות הגליל',
    district: 'עכו',
  },
  '1220': {
    name: 'אבירים',
    district: 'עכו',
  },
  '1221': {
    name: 'צורית',
    district: 'עכו',
  },
  '1222': {
    name: 'מצפה אבי"ב',
    district: 'עכו',
  },
  '1223': {
    name: 'שדי אברהם',
    district: 'באר שבע',
  },
  '1224': {
    name: 'כוכב יאיר',
    district: 'פתח תקווה',
  },
  '1225': {
    name: 'רביד',
    district: 'כנרת',
  },
  '1226': {
    name: 'יובלים',
    district: 'עכו',
  },
  '1227': {
    name: 'יתד',
    district: 'באר שבע',
  },
  '1228': {
    name: 'רקפת',
    district: 'עכו',
  },
  '1229': {
    name: 'כלנית',
    district: 'כנרת',
  },
  '1230': {
    name: 'לבנים',
    district: 'כנרת',
  },
  '1231': {
    name: 'פרי גן',
    district: 'באר שבע',
  },
  '1232': {
    name: 'יבול',
    district: 'באר שבע',
  },
  '1233': {
    name: 'שקף',
    district: 'אשקלון',
  },
  '1234': {
    name: 'קבועה (שבט)',
    district: 'באר שבע',
  },
  '1235': {
    name: 'שורשים',
    district: 'עכו',
  },
  '1236': {
    name: 'נירית',
    district: 'פתח תקווה',
  },
  '1237': {
    name: 'תלמי יוסף',
    district: 'באר שבע',
  },
  '1238': {
    name: 'סופה',
    district: 'באר שבע',
  },
  '1239': {
    name: 'חולית',
    district: 'באר שבע',
  },
  '1240': {
    name: 'עין הבשור',
    district: 'באר שבע',
  },
  '1241': {
    name: 'דקל',
    district: 'באר שבע',
  },
  '1242': {
    name: 'נתיב העשרה',
    district: 'אשקלון',
  },
  '1243': {
    name: 'קציר',
    district: 'חדרה',
  },
  '1244': {
    name: 'תמרת',
    district: 'עפולה',
  },
  '1245': {
    name: 'סלמה',
    district: 'עכו',
  },
  '1246': {
    name: 'עראמשה',
    district: 'עכו',
  },
  '1247': {
    name: 'חריש',
    district: 'חדרה',
  },
  '1248': {
    name: 'אליפז',
    district: 'באר שבע',
  },
  '1249': {
    name: 'הרדוף',
    district: 'עפולה',
  },
  '1251': {
    name: 'עין תמר',
    district: 'באר שבע',
  },
  '1252': {
    name: 'כורזים',
    district: 'צפת',
  },
  '1253': {
    name: 'אמנון',
    district: 'כנרת',
  },
  '1254': {
    name: 'נטף',
    district: 'ירושלים',
  },
  '1255': {
    name: 'לוטן',
    district: 'באר שבע',
  },
  '1256': {
    name: 'אשרת',
    district: 'עכו',
  },
  '1257': {
    name: 'חנתון',
    district: 'עפולה',
  },
  '1258': {
    name: 'מסד',
    district: 'כנרת',
  },
  '1259': {
    name: 'נווה שלום',
    district: 'ירושלים',
  },
  '1260': {
    name: 'רתמים',
    district: 'באר שבע',
  },
  '1261': {
    name: 'הר עמשא',
    district: 'באר שבע',
  },
  '1262': {
    name: 'צוקים',
    district: 'באר שבע',
  },
  '1263': {
    name: 'כפר ורדים',
    district: 'עכו',
  },
  '1264': {
    name: 'כרמי יוסף',
    district: 'רמלה',
  },
  '1265': {
    name: 'שומריה',
    district: 'באר שבע',
  },
  '1266': {
    name: 'שחרות',
    district: 'באר שבע',
  },
  '1267': {
    name: 'שיטים',
    district: 'באר שבע',
  },
  '1268': {
    name: 'מיתר',
    district: 'באר שבע',
  },
  '1271': {
    name: 'להבים',
    district: 'באר שבע',
  },
  '1272': {
    name: 'חלוץ',
    district: 'עכו',
  },
  '1274': {
    name: 'גן נר',
    district: 'עפולה',
  },
  '1275': {
    name: 'אבטליון',
    district: 'עכו',
  },
  '1276': {
    name: 'אשבל',
    district: 'עכו',
  },
  '1278': {
    name: 'באר מילכה',
    district: 'באר שבע',
  },
  '1279': {
    name: 'נווה חריף',
    district: 'באר שבע',
  },
  '1280': {
    name: 'ניצני סיני',
    district: 'באר שבע',
  },
  '1282': {
    name: 'מירב',
    district: 'עפולה',
  },
  '1283': {
    name: 'תל תאומים',
    district: 'עפולה',
  },
  '1284': {
    name: 'נופית',
    district: 'חיפה',
  },
  '1285': {
    name: 'כרכום',
    district: 'כנרת',
  },
  '1286': {
    name: 'שגב-שלום',
    district: 'באר שבע',
  },
  '1287': {
    name: 'שני',
    district: 'באר שבע',
  },
  '1288': {
    name: 'גבעת אלה',
    district: 'עפולה',
  },
  '1290': {
    name: 'זמר',
    district: 'השרון',
  },
  '1291': {
    name: 'כמהין',
    district: 'באר שבע',
  },
  '1292': {
    name: "ג'דיידה-מכר",
    district: 'עכו',
  },
  '1293': {
    name: 'גבעת אבני',
    district: 'כנרת',
  },
  '1294': {
    name: 'אור הגנוז',
    district: 'צפת',
  },
  '1295': {
    name: "יאנוח-ג'ת",
    district: 'עכו',
  },
  '1296': {
    name: 'כסרא-סמיע',
    district: 'עכו',
  },
  '1297': {
    name: 'כפר חנניה',
    district: 'צפת',
  },
  '1298': {
    name: 'אתגר',
    district: 'עכו',
  },
  '1303': {
    name: 'חורה',
    district: 'באר שבע',
  },
  '1304': {
    name: 'שוהם',
    district: 'רמלה',
  },
  '1309': {
    name: 'אלעד',
    district: 'פתח תקווה',
  },
  '1310': {
    name: 'לפיד',
    district: 'רמלה',
  },
  '1311': {
    name: 'אבשלום',
    district: 'באר שבע',
  },
  '1313': {
    name: 'פוריה עילית',
    district: 'כנרת',
  },
  '1314': {
    name: 'נווה זיו',
    district: 'עכו',
  },
  '1315': {
    name: 'מתן',
    district: 'פתח תקווה',
  },
  '1316': {
    name: 'אל-עריאן',
    district: 'חדרה',
  },
  '1317': {
    name: 'דמיידה',
    district: 'עכו',
  },
  '1318': {
    name: 'מבואות ים',
    district: 'השרון',
  },
  '1319': {
    name: 'בת חפר',
    district: 'השרון',
  },
  '1320': {
    name: 'עין חוד',
    district: 'חדרה',
  },
  '1321': {
    name: "ח'ואלד",
    district: 'חיפה',
  },
  '1322': {
    name: 'הודיות',
    district: 'כנרת',
  },
  '1323': {
    name: 'בת הדר',
    district: 'אשקלון',
  },
  '1324': {
    name: 'ארסוף',
    district: 'השרון',
  },
  '1325': {
    name: 'כפר זוהרים',
    district: 'ירושלים',
  },
  '1326': {
    name: 'בסמ"ה',
    district: 'חדרה',
  },
  '1327': {
    name: 'מעלה עירון',
    district: 'חדרה',
  },
  '1329': {
    name: 'יתיר',
    district: 'באר שבע',
  },
  '1330': {
    name: 'אחוזת ברק',
    district: 'עפולה',
  },
  '1331': {
    name: 'כמאנה',
    district: 'עכו',
  },
  '1332': {
    name: 'חוסנייה',
    district: 'עכו',
  },
  '1333': {
    name: 'נוף איילון',
    district: 'רמלה',
  },
  '1334': {
    name: 'ראס אל-עין',
    district: 'עכו',
  },
  '1335': {
    name: 'ערב אל נעים',
    district: 'עכו',
  },
  '1336': {
    name: 'אירוס',
    district: '',
  },
  '1337': {
    name: 'שמשית',
    district: 'עפולה',
  },
  '1338': {
    name: 'כדיתה',
    district: 'צפת',
  },
  '1339': {
    name: 'אל-עזי',
    district: 'אשקלון',
  },
  '1340': {
    name: 'מרחב עם',
    district: 'באר שבע',
  },
  '1341': {
    name: 'רוח מדבר',
    district: 'באר שבע',
  },
  '1342': {
    name: 'אבו קרינאת (יישוב)',
    district: 'באר שבע',
  },
  '1343': {
    name: 'מכחול',
    district: 'באר שבע',
  },
  '1344': {
    name: 'גבעות בר',
    district: 'באר שבע',
  },
  '1345': {
    name: 'צור יצחק',
    district: 'פתח תקווה',
  },
  '1346': {
    name: 'תראבין א-צאנע(ישוב)',
    district: 'באר שבע',
  },
  '1347': {
    name: 'קצר א-סר',
    district: 'באר שבע',
  },
  '1348': {
    name: "ביר הדאג'",
    district: 'באר שבע',
  },
  '1349': {
    name: "דריג'את",
    district: 'באר שבע',
  },
  '1358': {
    name: 'אום בטין',
    district: 'באר שבע',
  },
  '1359': {
    name: 'אל סייד',
    district: 'באר שבע',
  },
  '1360': {
    name: 'סעוה',
    district: 'באר שבע',
  },
  '1361': {
    name: 'בת חן',
    district: 'השרון',
  },
  '1363': {
    name: 'בני נצרים',
    district: 'באר שבע',
  },
  '1364': {
    name: 'שלומית',
    district: 'באר שבע',
  },
  '1365': {
    name: 'אליאב',
    district: '',
  },
  '1366': {
    name: 'נווה',
    district: 'באר שבע',
  },
  '1367': {
    name: 'כחלה',
    district: 'באר שבע',
  },
  '1368': {
    name: 'בני דקלים',
    district: 'אשקלון',
  },
  '1369': {
    name: 'נטע',
    district: 'אשקלון',
  },
  '1370': {
    name: 'מצפה אילן',
    district: 'חדרה',
  },
  '1371': {
    name: 'גני טל',
    district: 'רחובות',
  },
  '1372': {
    name: 'נצר חזני',
    district: 'רחובות',
  },
  '1373': {
    name: 'שלווה במדבר',
    district: 'באר שבע',
  },
  '1374': {
    name: 'כרמי קטיף',
    district: '',
  },
  '1375': {
    name: 'אבו תלול',
    district: 'באר שבע',
  },
  '1376': {
    name: 'באר גנים',
    district: 'באר שבע',
  },
  '1377': {
    name: 'שבי דרום',
    district: '',
  },
  '1401': {
    name: 'בת חצור',
    district: 'אשקלון',
  },
  '1402': {
    name: 'חצרות חולדה',
    district: 'רמלה',
  },
  '1405': {
    name: 'חצרות כ"ח',
    district: 'פתח תקווה',
  },
  '1409': {
    name: 'חצר בארותיים',
    district: 'השרון',
  },
  '1411': {
    name: 'מחנה הילה',
    district: 'רחובות',
  },
  '1412': {
    name: 'מחנה תל נוף',
    district: 'רחובות',
  },
  '1413': {
    name: 'מחנה יהודית',
    district: 'עפולה',
  },
  '1414': {
    name: 'מחנה מרים',
    district: 'אשקלון',
  },
  '1415': {
    name: 'מחנה יפה',
    district: 'באר שבע',
  },
  '1416': {
    name: 'מחנה יוכבד',
    district: 'באר שבע',
  },
  '1418': {
    name: 'מחנה טלי',
    district: 'באר שבע',
  },
  '1419': {
    name: "ניצן ב'",
    district: 'אשקלון',
  },
  '2002': {
    name: 'תנובות',
    district: 'השרון',
  },
  '2003': {
    name: 'תלמי אלעזר',
    district: 'חדרה',
  },
  '2006': {
    name: 'כנות',
    district: 'אשקלון',
  },
  '2008': {
    name: 'שדה יצחק',
    district: 'חדרה',
  },
  '2009': {
    name: 'יובל',
    district: 'צפת',
  },
  '2010': {
    name: 'כפר בן נון',
    district: 'רמלה',
  },
  '2011': {
    name: 'ינון',
    district: 'אשקלון',
  },
  '2012': {
    name: 'אורות',
    district: 'אשקלון',
  },
  '2013': {
    name: 'בן שמן (מושב)',
    district: 'רמלה',
  },
  '2014': {
    name: 'גבעולים',
    district: 'באר שבע',
  },
  '2015': {
    name: 'שדי חמד',
    district: 'פתח תקווה',
  },
  '2016': {
    name: 'רוויה',
    district: 'עפולה',
  },
  '2018': {
    name: 'גבעת חיים (איחוד)',
    district: 'השרון',
  },
  '2021': {
    name: 'אשל הנשיא',
    district: 'באר שבע',
  },
  '2023': {
    name: 'להב',
    district: 'באר שבע',
  },
  '2024': {
    name: 'אום אל-קוטוף',
    district: 'חדרה',
  },
  '2026': {
    name: 'ירדנה',
    district: 'עפולה',
  },
  '2029': {
    name: 'מדרך עוז',
    district: 'עפולה',
  },
  '2030': {
    name: 'מנוחה',
    district: 'אשקלון',
  },
  '2033': {
    name: 'בית חלקיה',
    district: 'רחובות',
  },
  '2034': {
    name: 'חצור הגלילית',
    district: 'צפת',
  },
  '2035': {
    name: 'עדנים',
    district: 'פתח תקווה',
  },
  '2038': {
    name: 'ברקת',
    district: 'פתח תקווה',
  },
  '2039': {
    name: 'קרית יערים(מוסד)',
    district: 'ירושלים',
  },
  '2042': {
    name: 'עין גדי',
    district: 'באר שבע',
  },
  '2043': {
    name: 'בחן',
    district: 'השרון',
  },
  '2044': {
    name: 'מלילות',
    district: 'באר שבע',
  },
  '2045': {
    name: 'נחלה',
    district: 'אשקלון',
  },
  '2046': {
    name: 'סגולה',
    district: 'אשקלון',
  },
  '2047': {
    name: 'ניר משה',
    district: 'באר שבע',
  },
  '2048': {
    name: 'ניר עקיבא',
    district: 'באר שבע',
  },
  '2049': {
    name: 'שדה צבי',
    district: 'באר שבע',
  },
  '2050': {
    name: 'תלמי ביל"ו',
    district: 'באר שבע',
  },
  '2051': {
    name: 'רווחה',
    district: 'אשקלון',
  },
  '2052': {
    name: 'אביטל',
    district: 'עפולה',
  },
  '2053': {
    name: 'פרזון',
    district: 'עפולה',
  },
  '2054': {
    name: 'מיטב',
    district: 'עפולה',
  },
  '2055': {
    name: 'מאור',
    district: 'חדרה',
  },
  '2057': {
    name: 'שדי תרומות',
    district: 'עפולה',
  },
  '2059': {
    name: 'פעמי תש"ז',
    district: 'באר שבע',
  },
  '2060': {
    name: 'ברוש',
    district: 'באר שבע',
  },
  '2061': {
    name: 'תדהר',
    district: 'באר שבע',
  },
  '2062': {
    name: 'תאשור',
    district: 'באר שבע',
  },
  '2063': {
    name: 'דישון',
    district: 'צפת',
  },
  '2064': {
    name: 'זרועה',
    district: 'באר שבע',
  },
  '2100': {
    name: 'טירת כרמל',
    district: 'חיפה',
  },
  '2200': {
    name: 'דימונה',
    district: 'באר שבע',
  },
  '2300': {
    name: 'קרית טבעון',
    district: 'חיפה',
  },
  '2400': {
    name: 'אור יהודה',
    district: 'רמת גן',
  },
  '2500': {
    name: 'נשר',
    district: 'חיפה',
  },
  '2530': {
    name: 'באר יעקב',
    district: 'רמלה',
  },
  '2550': {
    name: 'גדרה',
    district: 'רחובות',
  },
  '2560': {
    name: 'ערד',
    district: 'באר שבע',
  },
  '2600': {
    name: 'אילת',
    district: 'באר שבע',
  },
  '2610': {
    name: 'בית שמש',
    district: 'ירושלים',
  },
  '2620': {
    name: 'קרית אונו',
    district: 'רמת גן',
  },
  '2630': {
    name: 'קרית גת',
    district: 'אשקלון',
  },
  '2640': {
    name: 'ראש העין',
    district: 'פתח תקווה',
  },
  '2650': {
    name: 'רמת השרון',
    district: 'תל אביב',
  },
  '2660': {
    name: 'יבנה',
    district: 'רחובות',
  },
  '2710': {
    name: 'אום אל-פחם',
    district: 'חדרה',
  },
  '2720': {
    name: 'טירה',
    district: 'השרון',
  },
  '2730': {
    name: 'טייבה',
    district: 'השרון',
  },
  '2742': {
    name: 'זבארגה (שבט)',
    district: 'באר שבע',
  },
  '2800': {
    name: 'קרית שמונה',
    district: 'צפת',
  },
  '3000': {
    name: 'ירושלים',
    district: 'ירושלים',
  },
  '3400': {
    name: 'חברון',
    district: 'חברון',
  },
  '3488': {
    name: 'כפר עציון',
    district: 'בית לחם',
  },
  '3555': {
    name: 'נתיב הגדוד',
    district: 'ירדן )יריחו(',
  },
  '3556': {
    name: 'אלמוג',
    district: 'ירדן )יריחו(',
  },
  '3557': {
    name: 'קדומים',
    district: 'טול כרם',
  },
  '3558': {
    name: 'תומר',
    district: 'ירדן )יריחו(',
  },
  '3560': {
    name: 'אלקנה',
    district: 'טול כרם',
  },
  '3561': {
    name: 'מגדל עוז',
    district: 'בית לחם',
  },
  '3563': {
    name: 'תקוע',
    district: 'בית לחם',
  },
  '3564': {
    name: 'כוכב השחר',
    district: 'ראמאללה',
  },
  '3565': {
    name: 'רימונים',
    district: 'ראמאללה',
  },
  '3566': {
    name: 'יפית',
    district: 'ירדן )יריחו(',
  },
  '3567': {
    name: 'סלעית',
    district: 'טול כרם',
  },
  '3568': {
    name: 'ריחן',
    district: "ג'נין",
  },
  '3569': {
    name: 'מבוא דותן',
    district: "ג'נין",
  },
  '3570': {
    name: 'אריאל',
    district: 'טול כרם',
  },
  '3571': {
    name: 'שבי שומרון',
    district: 'שכם',
  },
  '3572': {
    name: 'כפר תפוח',
    district: 'טול כרם',
  },
  '3573': {
    name: 'נוה צוף',
    district: 'ראמאללה',
  },
  '3574': {
    name: 'בית אל',
    district: 'ראמאללה',
  },
  '3575': {
    name: 'בית חורון',
    district: 'ראמאללה',
  },
  '3576': {
    name: 'מצפה יריחו',
    district: 'ירדן )יריחו(',
  },
  '3578': {
    name: 'שדמות מחולה',
    district: 'ירדן )יריחו(',
  },
  '3579': {
    name: 'אלון מורה',
    district: 'שכם',
  },
  '3598': {
    name: 'ארגמן',
    district: 'ירדן )יריחו(',
  },
  '3599': {
    name: 'מחולה',
    district: 'ירדן )יריחו(',
  },
  '3601': {
    name: 'קליה',
    district: 'ירדן )יריחו(',
  },
  '3602': {
    name: 'ראש צורים',
    district: 'בית לחם',
  },
  '3603': {
    name: 'הר גילה',
    district: 'בית לחם',
  },
  '3604': {
    name: 'אלון שבות',
    district: 'בית לחם',
  },
  '3605': {
    name: 'משואה',
    district: 'ירדן )יריחו(',
  },
  '3606': {
    name: 'גלגל',
    district: 'ירדן )יריחו(',
  },
  '3607': {
    name: 'ייט"ב',
    district: 'ירדן )יריחו(',
  },
  '3608': {
    name: 'מעלה אפרים',
    district: 'ירדן )יריחו(',
  },
  '3609': {
    name: 'חמרה',
    district: 'ירדן )יריחו(',
  },
  '3610': {
    name: 'מצפה שלם',
    district: 'ירדן )יריחו(',
  },
  '3611': {
    name: 'קרית ארבע',
    district: 'חברון',
  },
  '3612': {
    name: 'בקעות',
    district: 'ירדן )יריחו(',
  },
  '3613': {
    name: 'גיתית',
    district: 'ירדן )יריחו(',
  },
  '3614': {
    name: 'מכורה',
    district: 'ירדן )יריחו(',
  },
  '3615': {
    name: 'פצאל',
    district: 'ירדן )יריחו(',
  },
  '3616': {
    name: 'מעלה אדומים',
    district: 'בית לחם',
  },
  '3617': {
    name: 'עופרה',
    district: 'ראמאללה',
  },
  '3618': {
    name: 'אלעזר',
    district: 'בית לחם',
  },
  '3619': {
    name: 'רועי',
    district: 'ירדן )יריחו(',
  },
  '3620': {
    name: 'נערן',
    district: 'ירדן )יריחו(',
  },
  '3638': {
    name: 'כפר אדומים',
    district: 'ראמאללה',
  },
  '3639': {
    name: 'ורד יריחו',
    district: 'ירדן )יריחו(',
  },
  '3640': {
    name: 'קרני שומרון',
    district: 'טול כרם',
  },
  '3641': {
    name: 'שילה',
    district: 'ראמאללה',
  },
  '3643': {
    name: 'חיננית',
    district: "ג'נין",
  },
  '3644': {
    name: 'גבעון החדשה',
    district: 'ראמאללה',
  },
  '3645': {
    name: 'בית הערבה',
    district: 'ירדן )יריחו(',
  },
  '3646': {
    name: 'חמדת',
    district: 'ירדן )יריחו(',
  },
  '3647': {
    name: 'יקיר',
    district: 'טול כרם',
  },
  '3648': {
    name: 'מתתיהו',
    district: 'ראמאללה',
  },
  '3649': {
    name: 'שקד',
    district: "ג'נין",
  },
  '3650': {
    name: 'אפרת',
    district: 'בית לחם',
  },
  '3651': {
    name: 'מעלה מכמש',
    district: 'ראמאללה',
  },
  '3652': {
    name: 'בית אריה',
    district: 'ראמאללה',
  },
  '3653': {
    name: 'מעלה עמוס',
    district: 'בית לחם',
  },
  '3654': {
    name: 'ברקן',
    district: 'טול כרם',
  },
  '3655': {
    name: 'ניל"י',
    district: 'ראמאללה',
  },
  '3656': {
    name: 'כרמל',
    district: 'חברון',
  },
  '3657': {
    name: 'מעון',
    district: 'חברון',
  },
  '3658': {
    name: 'עטרת',
    district: 'ראמאללה',
  },
  '3659': {
    name: 'פסגות',
    district: 'ראמאללה',
  },
  '3660': {
    name: 'עמנואל',
    district: 'טול כרם',
  },
  '3709': {
    name: 'מבוא חורון',
    district: 'ראמאללה',
  },
  '3710': {
    name: 'ברכה',
    district: 'שכם',
  },
  '3712': {
    name: 'ענב',
    district: 'טול כרם',
  },
  '3713': {
    name: 'נעמ"ה',
    district: 'ירדן )יריחו(',
  },
  '3715': {
    name: 'עלמון',
    district: 'ראמאללה',
  },
  '3717': {
    name: 'חרמש',
    district: "ג'נין",
  },
  '3719': {
    name: 'תלם',
    district: 'חברון',
  },
  '3720': {
    name: 'שערי תקווה',
    district: 'טול כרם',
  },
  '3722': {
    name: 'אשכולות',
    district: 'חברון',
  },
  '3723': {
    name: 'פני חבר',
    district: 'חברון',
  },
  '3724': {
    name: 'נגוהות',
    district: 'חברון',
  },
  '3725': {
    name: 'נווה דניאל',
    district: 'בית לחם',
  },
  '3726': {
    name: 'נוקדים',
    district: 'בית לחם',
  },
  '3727': {
    name: 'עלי זהב',
    district: 'טול כרם',
  },
  '3730': {
    name: 'גבעת זאב',
    district: 'ראמאללה',
  },
  '3743': {
    name: 'טנא',
    district: 'חברון',
  },
  '3744': {
    name: 'ברוכין',
    district: 'טול כרם',
  },
  '3745': {
    name: 'מצדות יהודה',
    district: 'חברון',
  },
  '3746': {
    name: 'קרית נטפים',
    district: 'טול כרם',
  },
  '3747': {
    name: 'דולב',
    district: 'ראמאללה',
  },
  '3748': {
    name: 'עתניאל',
    district: 'חברון',
  },
  '3749': {
    name: 'יצהר',
    district: 'שכם',
  },
  '3750': {
    name: 'אלפי מנשה',
    district: 'טול כרם',
  },
  '3751': {
    name: 'מגדלים',
    district: 'שכם',
  },
  '3752': {
    name: 'מעלה לבונה',
    district: 'ראמאללה',
  },
  '3754': {
    name: 'אספר',
    district: 'חברון',
  },
  '3756': {
    name: 'סוסיה',
    district: 'חברון',
  },
  '3759': {
    name: 'אדורה',
    district: 'חברון',
  },
  '3760': {
    name: 'אורנית',
    district: 'טול כרם',
  },
  '3762': {
    name: 'איתמר',
    district: 'שכם',
  },
  '3763': {
    name: 'גבע בנימין',
    district: 'ראמאללה',
  },
  '3764': {
    name: 'חגי',
    district: 'חברון',
  },
  '3765': {
    name: 'עלי',
    district: 'שכם',
  },
  '3766': {
    name: 'כרמי צור',
    district: 'חברון',
  },
  '3767': {
    name: 'נחליאל',
    district: 'ראמאללה',
  },
  '3768': {
    name: 'פדואל',
    district: 'טול כרם',
  },
  '3769': {
    name: 'הר אדר',
    district: 'ראמאללה',
  },
  '3770': {
    name: 'חשמונאים',
    district: 'ראמאללה',
  },
  '3777': {
    name: 'סנסנה',
    district: '',
  },
  '3778': {
    name: 'עץ אפרים',
    district: 'טול כרם',
  },
  '3779': {
    name: 'כוכב יעקב',
    district: 'ראמאללה',
  },
  '3780': {
    name: 'ביתר עילית',
    district: 'בית לחם',
  },
  '3781': {
    name: 'קדר',
    district: 'בית לחם',
  },
  '3782': {
    name: 'רותם',
    district: 'ירדן )יריחו(',
  },
  '3784': {
    name: 'שמעה',
    district: 'חברון',
  },
  '3785': {
    name: 'משכיות',
    district: 'ירדן )יריחו(',
  },
  '3786': {
    name: 'אבנת',
    district: 'ירדן )יריחו(',
  },
  '3787': {
    name: 'נעלה',
    district: 'ראמאללה',
  },
  '3788': {
    name: 'טלמון',
    district: 'ראמאללה',
  },
  '3790': {
    name: 'נופים',
    district: 'טול כרם',
  },
  '3791': {
    name: 'צופים',
    district: 'טול כרם',
  },
  '3793': {
    name: 'אבני חפץ',
    district: 'טול כרם',
  },
  '3794': {
    name: 'בת עין',
    district: 'בית לחם',
  },
  '3795': {
    name: 'רבבה',
    district: 'שכם',
  },
  '3796': {
    name: 'כפר האורנים',
    district: 'ראמאללה',
  },
  '3797': {
    name: 'מודיעין עילית',
    district: 'ראמאללה',
  },
  '3822': {
    name: 'רחלים',
    district: '',
  },
  '3823': {
    name: 'גני מודיעין',
    district: '',
  },
  '3824': {
    name: 'עמיחי',
    district: '',
  },
  '3825': {
    name: 'מבואות יריחו',
    district: '',
  },
  '4000': {
    name: 'חיפה',
    district: 'חיפה',
  },
  '4001': {
    name: 'בוקעאתא',
    district: 'גולן',
  },
  '4002': {
    name: 'אלי-עד',
    district: 'גולן',
  },
  '4003': {
    name: 'אל-רום',
    district: 'גולן',
  },
  '4004': {
    name: 'כפר חרוב',
    district: 'גולן',
  },
  '4005': {
    name: 'חספין',
    district: 'גולן',
  },
  '4006': {
    name: 'קשת',
    district: 'גולן',
  },
  '4007': {
    name: 'יונתן',
    district: 'גולן',
  },
  '4008': {
    name: 'מעלה גמלא',
    district: 'גולן',
  },
  '4009': {
    name: 'שעל',
    district: 'גולן',
  },
  '4010': {
    name: 'אודם',
    district: 'גולן',
  },
  '4011': {
    name: 'אבני איתן',
    district: 'גולן',
  },
  '4012': {
    name: 'אניעם',
    district: 'גולן',
  },
  '4013': {
    name: 'אורטל',
    district: 'גולן',
  },
  '4014': {
    name: 'נטור',
    district: 'גולן',
  },
  '4015': {
    name: 'בני יהודה',
    district: 'גולן',
  },
  '4017': {
    name: 'אלוני הבשן',
    district: 'גולן',
  },
  '4019': {
    name: 'מיצר',
    district: 'גולן',
  },
  '4021': {
    name: 'גבעת יואב',
    district: 'גולן',
  },
  '4022': {
    name: 'גשור',
    district: 'גולן',
  },
  '4024': {
    name: 'קלע',
    district: 'גולן',
  },
  '4025': {
    name: 'קדמת צבי',
    district: 'גולן',
  },
  '4026': {
    name: 'חד-נס',
    district: 'גולן',
  },
  '4028': {
    name: 'כנף',
    district: 'גולן',
  },
  '4035': {
    name: 'נמרוד',
    district: '',
  },
  '4100': {
    name: 'קצרין',
    district: 'גולן',
  },
  '4101': {
    name: 'מרום גולן',
    district: 'גולן',
  },
  '4201': {
    name: "מג'דל שמס",
    district: 'גולן',
  },
  '4203': {
    name: 'מסעדה',
    district: 'גולן',
  },
  '4204': {
    name: 'מבוא חמה',
    district: 'גולן',
  },
  '4301': {
    name: 'אפיק',
    district: 'גולן',
  },
  '4303': {
    name: 'נווה אטי"ב',
    district: 'גולן',
  },
  '4304': {
    name: 'נוב',
    district: 'גולן',
  },
  '4501': {
    name: "ע'ג'ר",
    district: 'גולן',
  },
  '4502': {
    name: 'עין קנייא',
    district: 'גולן',
  },
  '4503': {
    name: 'עין זיוון',
    district: 'גולן',
  },
  '4551': {
    name: 'נאות גולן',
    district: 'גולן',
  },
  '4701': {
    name: 'רמת מגשימים',
    district: 'גולן',
  },
  '4702': {
    name: 'רמות',
    district: 'גולן',
  },
  '5000': {
    name: 'תל אביב - יפו',
    district: 'תל אביב',
  },
  '6000': {
    name: 'באקה אל-גרביה',
    district: 'חדרה',
  },
  '6100': {
    name: 'בני ברק',
    district: 'רמת גן',
  },
  '6200': {
    name: 'בת ים',
    district: 'חולון',
  },
  '6300': {
    name: 'גבעתיים',
    district: 'רמת גן',
  },
  '6400': {
    name: 'הרצליה',
    district: 'תל אביב',
  },
  '6500': {
    name: 'חדרה',
    district: 'חדרה',
  },
  '6600': {
    name: 'חולון',
    district: 'חולון',
  },
  '6700': {
    name: 'טבריה',
    district: 'כנרת',
  },
  '6800': {
    name: 'קרית אתא',
    district: 'חיפה',
  },
  '6900': {
    name: 'כפר סבא',
    district: 'פתח תקווה',
  },
  '7000': {
    name: 'לוד',
    district: 'רמלה',
  },
  '7100': {
    name: 'אשקלון',
    district: 'אשקלון',
  },
  '7200': {
    name: 'נס ציונה',
    district: 'רחובות',
  },
  '7300': {
    name: 'נצרת',
    district: 'נצרת',
  },
  '7400': {
    name: 'נתניה',
    district: 'השרון',
  },
  '7500': {
    name: "סח'נין",
    district: 'עכו',
  },
  '7600': {
    name: 'עכו',
    district: 'עכו',
  },
  '7700': {
    name: 'עפולה',
    district: 'עפולה',
  },
  '7800': {
    name: 'פרדס חנה-כרכור',
    district: 'חדרה',
  },
  '7900': {
    name: 'פתח תקווה',
    district: 'פתח תקווה',
  },
  '8000': {
    name: 'צפת',
    district: 'צפת',
  },
  '8200': {
    name: 'קרית מוצקין',
    district: 'חיפה',
  },
  '8300': {
    name: 'ראשון לציון',
    district: 'רחובות',
  },
  '8400': {
    name: 'רחובות',
    district: 'רחובות',
  },
  '8500': {
    name: 'רמלה',
    district: 'רמלה',
  },
  '8600': {
    name: 'רמת גן',
    district: 'רמת גן',
  },
  '8700': {
    name: 'רעננה',
    district: 'פתח תקווה',
  },
  '8800': {
    name: 'שפרעם',
    district: 'עכו',
  },
  '8900': {
    name: 'טמרה',
    district: 'עכו',
  },
  '9000': {
    name: 'באר שבע',
    district: 'באר שבע',
  },
  '9100': {
    name: 'נהריה',
    district: 'עכו',
  },
  '9200': {
    name: 'בית שאן',
    district: 'עפולה',
  },
  '9300': {
    name: 'זכרון יעקב',
    district: 'חדרה',
  },
  '9400': {
    name: 'יהוד-מונוסון',
    district: 'פתח תקווה',
  },
  '9500': {
    name: 'קרית ביאליק',
    district: 'חיפה',
  },
  '9600': {
    name: 'קרית ים',
    district: 'חיפה',
  },
  '9700': {
    name: 'הוד השרון',
    district: 'פתח תקווה',
  },
  '9800': {
    name: 'בנימינה-גבעת עדה',
    district: 'חדרה',
  },
} as const;
const citiesKeys = Object.keys(CITIES);
export type CITIES_TYPE = typeof citiesKeys;
