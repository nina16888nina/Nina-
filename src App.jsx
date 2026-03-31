import React, { useState } from 'react';
import { 
  Heart, 
  Coins, 
  Briefcase, 
  Home, 
  GraduationCap, 
  MessageCircle, 
  ScrollText, 
  ShoppingBag, 
  ArrowLeft,
  AlertCircle,
  Stars,
  Zap,
  Coffee,
  UserCheck,
  Target,
  CloudSun
} from 'lucide-react';

const SITUATIONS = [
  { id: 'love', label: '感情問題', icon: Heart, emoji: '💖', color: 'text-pink-500', bg: 'bg-pink-50', border: 'border-pink-200' },
  { id: 'wealth', label: '財運提升', icon: Coins, emoji: '💰', color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' },
  { id: 'career', label: '事業轉運', icon: Briefcase, emoji: '🚀', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
  { id: 'family', label: '家運穩固', icon: Home, emoji: '🏡', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' },
  { id: 'study', label: '小孩課業', icon: GraduationCap, emoji: '📖', color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' }
];

const RECOMMENDATIONS = {
  love: {
    ritual: '桃花轉運・貴人引動祈福 🌹',
    products: ['人緣鹽 🧼', '魔法五行能量香氛 ✨', '芙蓉精油 🌿'],
    desc: '改善磁場吸引力，增進人際關係與正緣互動。',
    expertAdvice: '💖 專業點撥：\n除了祈福求對象，一對一八字諮詢更能「針對問題對症下藥」。透過諮詢進行「八字合盤」，能有效找出彼此性格盲點，進而「除小人、減少爭吵」，讓溝通變順暢，感情自然甜蜜蜜！'
  },
  wealth: {
    ritual: '鎮煞護財・補財庫祈福 🧧',
    products: ['招財鹽 🪙', '羅盤化煞 🧭', '魔法五行能量香氛 ✨'],
    desc: '清理破財磁場，穩固財源並提升進財能量。',
    expertAdvice: '💰 專業點撥：\n補財庫是增加口袋容量，但如果口袋有洞怎麼辦？透過諮詢找出您的「流年財位」，建議可以「在家安財甕」鎖住財氣，讓您不只會賺錢，更要能留得住錢！'
  },
  career: {
    ritual: '斬小人・事業破局祈福 ⚔️',
    products: ['羅盤化煞 🧭', '淨化鹽 🧂', '魔法五行能量香氛 ✨'],
    desc: '化解工作上的阻礙，提升貴人運勢。',
    expertAdvice: '🚀 專業點撥：\n職場小人多往往是磁場出了問題。一對一八字諮詢能幫您精準抓出「流年大運」轉換期。配合辦公桌位化煞佈置，讓貴人顯現，事業路自然一飛沖天！'
  },
  family: {
    ritual: '祭祖孝親・穩定家運祈福 🕯️',
    products: ['淨化鹽 🧂', '芙蓉沐浴乳 🛀', '羅盤化煞 🧭'],
    desc: '化解家宅不安，淨化空間能量。',
    expertAdvice: '🏡 專業點撥：\n家運不順可能源自環境氣場的不協調。除了定期祈福，建議透過諮詢進行「陽宅磁場校正」，針對家中的煞位做調整，讓全家人在穩定的能量中生活，相處更和諧。'
  },
  study: {
    ritual: '文昌開運・心神安定祈福 📝',
    products: ['芙蓉精油 🌿', '淨化鹽 🧂', '魔法五行能量香氛 ✨'],
    desc: '安定孩子情緒，提升專注力，排除學習干擾。',
    expertAdvice: '📖 專業點撥：\n每個孩子的特質不同，透過八字諮詢找出「個人文昌方位」，搭配專屬的開運佈置與能量精油。對症下藥後，孩子學習更能事半功倍，家長也能少操心！'
  }
};

export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const lineLink = "https://lin.ee/6s9hIVx";

  const currentRec = selectedId ? RECOMMENDATIONS[selectedId] : null;
  const currentSit = selectedId ? SITUATIONS.find(s => s.id === selectedId) : null;

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-slate-800 font-sans pb-12 selection:bg-yellow-200">
      <header className="bg-white border-b-4 border-yellow-400 py-10 px-4 text-center shadow-sm">
        <div className="inline-block bg-yellow-100 rounded-full px-4 py-1 text-yellow-700 font-bold text-sm mb-3">
          🔮 專業命理指南
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-2">
          客製化開運轉運站
        </h1>
        <p className="mt-2 text-slate-600 font-medium">
          我是會預測孩子今天會不會哭鬧的命理師 ✨<br/>
          為您引導最適合的能量方向
        </p>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-10">
        {!selectedId ? (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-xl font-bold text-slate-700 flex items-center justify-center gap-2">
                <Stars className="text-yellow-500 w-5 h-5" />
                請選取您目前的狀況
                <Stars className="text-yellow-500 w-5 h-5" />
              </h2>
              <p className="text-slate-400 mt-1">選一個最想改善的領域吧！</p>
            </div>

            <div className="grid grid-cols-1 gap-5">
              {SITUATIONS.map((sit) => (
                <button
                  key={sit.id}
                  onClick={() => setSelectedId(sit.id)}
                  className={`flex items-center p-6 bg-white rounded-3xl border-2 ${sit.border} shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all text-left group`}
                >
                  <div className="text-4xl mr-6 group-hover:scale-125 transition-transform duration-300">
                    {sit.emoji}
                  </div>
                  <div className="flex-1">
                    <span className="text-xl font-black text-slate-800">{sit.label}</span>
                    <p className="text-xs text-slate-400 mt-1">點擊查看建議配套</p>
                  </div>
                  <Zap className="w-5 h-5 text-slate-300 group-hover:text-yellow-400 transition-colors" />
                </button>
              ))}
            </div>

            <div className="bg-indigo-600 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <CloudSun className="w-24 h-24" />
              </div>
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <UserCheck className="w-8 h-8 text-yellow-400" />
                <h3 className="text-xl font-black">為什麼需要一對一諮詢？</h3>
              </div>
              <p className="leading-relaxed font-medium mb-6 relative z-10">
                祈福是增加運勢底氣，而「八字諮詢」則是幫您找出漏水的水管！
                透過專屬分析，才能真正<span className="text-yellow-300 underline underline-offset-4 font-black">針對問題對症下藥</span>，不再瞎忙開運。
              </p>
              <a
                href={lineLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-indigo-700 text-center font-black py-4 rounded-2xl hover:bg-yellow-400 hover:text-indigo-900 transition-all shadow-md active:scale-95"
              >
                諮詢個人命盤 🎯
              </a>
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={() => setSelectedId(null)}
              className="mb-6 flex items-center font-bold text-slate-500 hover:text-indigo-600 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" /> 返回重新選擇
            </button>

            <div className="bg-white rounded-[2.5rem] shadow-2xl border-4 border-slate-900 overflow-hidden">
              <div className="bg-slate-900 p-10 text-center text-white">
                <div className="text-6xl mb-4">
                  {currentSit.emoji}
                </div>
                <h2 className="text-3xl font-black">【{currentSit.label}】建議方案</h2>
              </div>

              <div className="p-8 md:p-12 space-y-10">
                <section className="bg-yellow-50 rounded-3xl p-6 border-2 border-yellow-200">
                  <div className="flex items-center text-orange-600 mb-2 font-black">
                    <Target className="w-5 h-5 mr-2" />
                    對症下藥建議
                  </div>
                  <div className="text-slate-700 font-medium whitespace-pre-line leading-relaxed italic">
                    {currentRec.expertAdvice}
                  </div>
                </section>

                <section>
                  <div className="flex items-center text-indigo-600 mb-4 font-black text-lg">
                    <ScrollText className="w-6 h-6 mr-2" />
                    建議祈福項目
                  </div>
                  <div className="bg-indigo-50 rounded-3xl p-6 border-2 border-indigo-100">
                    <div className="text-2xl font-black text-indigo-900 mb-3">{currentRec.ritual}</div>
                    <p className="text-indigo-700/80 leading-relaxed font-medium">{currentRec.desc}</p>
                  </div>
                </section>

                <section>
                  <div className="flex items-center text-amber-600 mb-4 font-black text-lg">
                    <ShoppingBag className="w-6 h-6 mr-2" />
                    配套開運輔助
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {currentRec.products.map((p, idx) => (
                      <div key={idx} className="bg-amber-50 text-amber-900 px-5 py-3 rounded-2xl border-2 border-amber-100 text-sm font-black shadow-sm">
                        {p}
                      </div>
                    ))}
                  </div>
                </section>

                <div className="pt-8 border-t-2 border-slate-50 text-center">
                  <div className="bg-green-50 rounded-2xl p-4 mb-6">
                    <p className="text-green-800 font-bold">
                      ✨ 想了解更精準的個人建議嗎？ ✨<br/>
                      <span className="text-sm font-normal">歡迎私訊官方 LINE，針對您的八字深入對談</span>
                    </p>
                  </div>
                  <a
                    href={lineLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#06C755] text-white font-black py-5 rounded-[2rem] shadow-[0_8px_0_0_#059641] hover:shadow-[0_4px_0_0_#059641] active:shadow-none active:translate-y-[4px] hover:bg-[#05b14c] transition-all text-xl no-underline flex items-center justify-center"
                  >
                    <MessageCircle className="w-7 h-7 mr-3 fill-current" />
                    私訊官方賴聊
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-yellow-50 rounded-3xl p-8 border-2 border-yellow-200 shadow-sm">
              <div className="flex items-start">
                <div className="bg-yellow-400 p-2 rounded-xl mr-4 shrink-0">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm text-yellow-900 leading-relaxed">
                  <p className="font-black text-base mb-2">💡 溫馨提醒事項：</p>
                  任何開運及祈福都不能保證做幾次會有效果，每個人能量不同、感受不同。但每做一次都能提升運勢，穩定磁場是轉運的關鍵。持續積累能量，好運遲早會發生！
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-slate-400 text-sm flex items-center justify-center gap-1">
                <Coffee className="w-4 h-4" /> 放鬆心情，讓好運與您同行
              </p>
            </div>
          </div>
        )}
      </main>

      <footer className="text-center text-slate-400 text-xs mt-4 px-4 pb-10">
        © 專業命理諮詢服務 | 心誠則靈 能量加持
      </footer>
    </div>
  );
}
