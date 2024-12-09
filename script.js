const chineseWords = [
    { chinese: "你好", pinyin: "nǐ hǎo", english: "Hello" },
    { chinese: "谢谢", pinyin: "xiè xiè", english: "Thank you" },
    { chinese: "再见", pinyin: "zài jiàn", english: "Goodbye" },
    { chinese: "不客气", pinyin: "bú kè qì", english: "You're welcome" },
    { chinese: "对不起", pinyin: "duì bu qǐ", english: "Sorry" },
    { chinese: "没关系", pinyin: "méi guān xi", english: "It's okay" },
    { chinese: "请问", pinyin: "qǐng wèn", english: "Excuse me" },
    { chinese: "好的", pinyin: "hǎo de", english: "Okay" },
    { chinese: "是", pinyin: "shì", english: "Yes" },
    { chinese: "不是", pinyin: "bú shì", english: "No" },
    { chinese: "有", pinyin: "yǒu", english: "Have" },
    { chinese: "没有", pinyin: "méi yǒu", english: "Don't have" },
    { chinese: "我", pinyin: "wǒ", english: "I" },
    { chinese: "你", pinyin: "nǐ", english: "You" },
    { chinese: "他", pinyin: "tā", english: "He" },
    { chinese: "她", pinyin: "tā", english: "She" },
    { chinese: "我们", pinyin: "wǒ men", english: "We" },
    { chinese: "你们", pinyin: "nǐ men", english: "You (plural)" },
    { chinese: "他们", pinyin: "tā men", english: "They" },
    { chinese: "这", pinyin: "zhè", english: "This" },
    { chinese: "那", pinyin: "nà", english: "That" },
    { chinese: "这里", pinyin: "zhè lǐ", english: "Here" },
    { chinese: "那里", pinyin: "nà lǐ", english: "There" },
    { chinese: "什么", pinyin: "shén me", english: "What" },
    { chinese: "谁", pinyin: "shuí", english: "Who" },
    { chinese: "哪儿", pinyin: "nǎr", english: "Where" },
    { chinese: "为什么", pinyin: "wèi shén me", english: "Why" },
    { chinese: "怎么样", pinyin: "zěn me yàng", english: "How" },
    { chinese: "多少", pinyin: "duō shao", english: "How much/many" },
    { chinese: "现在", pinyin: "xiàn zài", english: "Now" },
    { chinese: "今天", pinyin: "jīn tiān", english: "Today" },
    { chinese: "明天", pinyin: "míng tiān", english: "Tomorrow" },
    { chinese: "昨天", pinyin: "zuó tiān", english: "Yesterday" },
    { chinese: "早上", pinyin: "zǎo shang", english: "Morning" },
    { chinese: "中午", pinyin: "zhōng wǔ", english: "Noon" },
    { chinese: "下午", pinyin: "xià wǔ", english: "Afternoon" },
    { chinese: "晚上", pinyin: "wǎn shang", english: "Evening" },
    { chinese: "一点", pinyin: "yī diǎn", english: "1 o'clock" },
    { chinese: "两点", pinyin: "liǎng diǎn", english: "2 o'clock" },
    { chinese: "三点", pinyin: "sān diǎn", english: "3 o'clock" },
    // ... add more numbers as needed
    { chinese: "吃饭", pinyin: "chī fàn", english: "To eat (a meal)" },
    { chinese: "喝水", pinyin: "hē shuǐ", english: "To drink water" },
    { chinese: "睡觉", pinyin: "shuì jiào", english: "To sleep" },
    { chinese: "去", pinyin: "qù", english: "To go" },
    { chinese: "来", pinyin: "lái", english: "To come" },
    { chinese: "看", pinyin: "kàn", english: "To see/watch" },
    { chinese: "听", pinyin: "tīng", english: "To listen" },
    { chinese: "说", pinyin: "shuō", english: "To speak" },
    { chinese: "读", pinyin: "dú", english: "To read" },
    { chinese: "写", pinyin: "xiě", english: "To write" },
    { chinese: "做", pinyin: "zuò", english: "To do" },
    { chinese: "学习", pinyin: "xué xí", english: "To study" },
    { chinese: "工作", pinyin: "gōng zuò", english: "To work" },
    { chinese: "玩", pinyin: "wán", english: "To play" },
    { chinese: "买", pinyin: "mǎi", english: "To buy" },
    { chinese: "卖", pinyin: "mài", english: "To sell" },
    { chinese: "喜欢", pinyin: "xǐ huan", english: "To like" },
    { chinese: "爱", pinyin: "ài", english: "To love" },
    { chinese: "想", pinyin: "xiǎng", english: "To want/miss" },
    { chinese: "知道", pinyin: "zhī dào", english: "To know" },
    { chinese: "可以", pinyin: "kě yǐ", english: "Can/May" },
    { chinese: "会", pinyin: "huì", english: "To be able to" },
    { chinese: "要", pinyin: "yào", english: "To want/need" },
    { chinese: "应该", pinyin: "yīng gāi", english: "Should" },
    { chinese: "很", pinyin: "hěn", english: "Very" },
    { chinese: "太", pinyin: "tài", english: "Too" },
    { chinese: "也", pinyin: "yě", english: "Also" },
    { chinese: "都", pinyin: "dōu", english: "All/Both" },
    { chinese: "和", pinyin: "hé", english: "And" },
    { chinese: "但是", pinyin: "dàn shì", english: "But" },
    { chinese: "因为", pinyin: "yīn wèi", english: "Because" },
    { chinese: "所以", pinyin: "suǒ yǐ", english: "So" },
    { chinese: "如果", pinyin: "rú guǒ", english: "If" },
    { chinese: "名字", pinyin: "míng zi", english: "Name" },
    { chinese: "人", pinyin: "rén", english: "Person" },
    { chinese: "家", pinyin: "jiā", english: "Home/Family" },
    { chinese: "朋友", pinyin: "péng you", english: "Friend" },
    { chinese: "先生", pinyin: "xiān sheng", english: "Mr." },
    { chinese: "小姐", pinyin: "xiǎo jie", english: "Miss" },
    { chinese: "老师", pinyin: "lǎo shī", english: "Teacher" },
    { chinese: "学生", pinyin: "xué sheng", english: "Student" },
    { chinese: "东西", pinyin: "dōng xi", english: "Thing" },
    { chinese: "钱", pinyin: "qián", english: "Money" },
    { chinese: "时间", pinyin: "shí jiān", english: "Time" },
    { chinese: "年", pinyin: "nián", english: "Year" },
    { chinese: "天", pinyin: "tiān", english: "Day" },
    { chinese: "手机", pinyin: "shǒu jī", english: "Mobile phone" },
    { chinese: "电脑", pinyin: "diàn nǎo", english: "Computer" },
    { chinese: "车", pinyin: "chē", english: "Car" },
    { chinese: "房子", pinyin: "fáng zi", english: "House" },
    { chinese: "门", pinyin: "mén", english: "Door" },
    { chinese: "水", pinyin: "shuǐ", english: "Water" },
    { chinese: "饭", pinyin: "fàn", english: "Rice/Meal" },
    { chinese: "菜", pinyin: "cài", english: "Dish/Vegetable" },
    { chinese: "水果", pinyin: "shuǐ guǒ", english: "Fruit" },
    { chinese: "颜色", pinyin: "yán sè", english: "Color" },
    { chinese: "红色", pinyin: "hóng sè", english: "Red" },
    { chinese: "黄色", pinyin: "huáng sè", english: "Yellow" },
    { chinese: "蓝色", pinyin: "lán sè", english: "Blue" },
    // ... add more colors
    { chinese: "中国", pinyin: "zhōng guó", english: "China" },
    { chinese: "北京", pinyin: "běi jīng", english: "Beijing" },
];

const wordDisplay = document.getElementById("word-display");
const chineseWordElement = document.getElementById("chinese-word");
const pinyinElement = document.getElementById("pinyin");
const englishTranslationElement = document.getElementById("english-translation");
const randomizeButton = document.getElementById("randomize-button");

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * chineseWords.length);
    return chineseWords[randomIndex];
}

function displayWord(word) {
    chineseWordElement.textContent = word.chinese;
    pinyinElement.textContent = word.pinyin;
    englishTranslationElement.textContent = word.english;
}

randomizeButton.addEventListener("click", () => {
    const randomWord = getRandomWord();
    displayWord(randomWord);
});

// Display an initial word on page load
displayWord(getRandomWord());