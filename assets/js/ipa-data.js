const IPA_ITEMS = {
  short_i: {
    symbol: '/ɪ/', reading: 'イ（短くゆるい）', hint: 'sit の母音', type: 'vowel', level: 'vowel', audioId: 'short-i',
    tip: '口角を少し横へ。日本語の「イ」より力を抜いて短く出します。',
    words: [
      { word: 'sit', ipa: '/sɪt/', meaning: '座る', slug: 'sit' },
      { word: 'milk', ipa: '/mɪlk/', meaning: '牛乳', slug: 'milk' },
      { word: 'fish', ipa: '/fɪʃ/', meaning: '魚', slug: 'fish' }
    ]
  },
  short_e: {
    symbol: '/e/', reading: 'エ', hint: 'bed の母音', type: 'vowel', level: 'vowel', audioId: 'short-e',
    tip: 'あごを少し下げて、明るい「エ」を短く保ちます。',
    words: [
      { word: 'bed', ipa: '/bed/', meaning: 'ベッド', slug: 'bed' },
      { word: 'pen', ipa: '/pen/', meaning: 'ペン', slug: 'pen' },
      { word: 'ten', ipa: '/ten/', meaning: '10', slug: 'ten' }
    ]
  },
  short_ae: {
    symbol: '/æ/', reading: 'ア（口を広く）', hint: 'cat の母音', type: 'vowel', level: 'vowel', audioId: 'short-ae',
    tip: '口を横に開きながら、低めで明るい音にします。',
    words: [
      { word: 'cat', ipa: '/kæt/', meaning: '猫', slug: 'cat' },
      { word: 'map', ipa: '/mæp/', meaning: '地図', slug: 'map' },
      { word: 'black', ipa: '/blæk/', meaning: '黒い', slug: 'black' }
    ]
  },
  short_ox: {
    symbol: '/ɒ/', reading: 'オ（短く丸い）', hint: 'dog の母音', type: 'vowel', level: 'vowel', audioId: 'short-ox',
    tip: '口をやや丸め、奥寄りで短く出します。',
    words: [
      { word: 'dog', ipa: '/dɒg/', meaning: '犬', slug: 'dog' },
      { word: 'box', ipa: '/bɒks/', meaning: '箱', slug: 'box' },
      { word: 'clock', ipa: '/klɒk/', meaning: '時計', slug: 'clock' }
    ]
  },
  short_caret: {
    symbol: '/ʌ/', reading: 'ア（中央寄り）', hint: 'cup の母音', type: 'vowel', level: 'vowel', audioId: 'short-caret',
    tip: '大きく口を開けすぎず、喉の中央あたりから短く出します。',
    words: [
      { word: 'cup', ipa: '/kʌp/', meaning: 'カップ', slug: 'cup' },
      { word: 'luck', ipa: '/lʌk/', meaning: '運', slug: 'luck' },
      { word: 'sun', ipa: '/sʌn/', meaning: '太陽', slug: 'sun' }
    ]
  },
  short_uu: {
    symbol: '/ʊ/', reading: 'ウ（短く丸く）', hint: 'put の母音', type: 'vowel', level: 'vowel', audioId: 'short-uu',
    tip: '唇を軽く丸めますが、長く引っ張らないのがポイントです。',
    words: [
      { word: 'put', ipa: '/pʊt/', meaning: '置く', slug: 'put' },
      { word: 'book', ipa: '/bʊk/', meaning: '本', slug: 'book' },
      { word: 'good', ipa: '/gʊd/', meaning: '良い', slug: 'good' }
    ]
  },
  short_schwa: {
    symbol: '/ə/', reading: 'シュワ', hint: 'tomato の弱音節', type: 'vowel', level: 'vowel', audioId: 'short-schwa',
    tip: '最も力の抜けた曖昧母音です。アクセントのない音節でよく出ます。',
    words: [
      { word: 'tomato', ipa: '/təˈmeɪtoʊ/', meaning: 'トマト', slug: 'tomato' },
      { word: 'sofa', ipa: '/ˈsoʊfə/', meaning: 'ソファ', slug: 'sofa' },
      { word: 'about', ipa: '/əˈbaʊt/', meaning: '〜について', slug: 'about' }
    ]
  },
  short_eps: {
    symbol: '/ɛ/', reading: 'エ（広め）', hint: 'men の母音', type: 'vowel', level: 'vowel', audioId: 'short-eps',
    tip: '普通の e よりも少し広がりを意識し、平たく短く発音します。',
    words: [
      { word: 'men', ipa: '/mɛn/', meaning: '男性たち', slug: 'men' },
      { word: 'red', ipa: '/rɛd/', meaning: '赤い', slug: 'red' },
      { word: 'head', ipa: '/hɛd/', meaning: '頭', slug: 'head' }
    ]
  },
  long_i: {
    symbol: '/iː/', reading: 'イー', hint: 'bee の母音', type: 'vowel', level: 'vowel', audioId: 'long-i',
    tip: '口角を軽く引いて、張りのあるまま少し長く伸ばします。',
    words: [
      { word: 'bee', ipa: '/biː/', meaning: '蜂', slug: 'bee' },
      { word: 'see', ipa: '/siː/', meaning: '見る', slug: 'see' },
      { word: 'green', ipa: '/griːn/', meaning: '緑の', slug: 'green' }
    ]
  },
  long_aa: {
    symbol: '/ɑː/', reading: 'アー', hint: 'car の母音', type: 'vowel', level: 'vowel', audioId: 'long-aa',
    tip: '口を縦に開き、低い位置で響かせながら長く保ちます。',
    words: [
      { word: 'car', ipa: '/kɑːr/', meaning: '車', slug: 'car' },
      { word: 'park', ipa: '/pɑːrk/', meaning: '公園', slug: 'park' },
      { word: 'father', ipa: '/ˈfɑːðər/', meaning: '父', slug: 'father' }
    ]
  },
  long_u: {
    symbol: '/uː/', reading: 'ウー', hint: 'moon の母音', type: 'vowel', level: 'vowel', audioId: 'long-u',
    tip: '唇を前へ突き出し、緊張感を保って長く出します。',
    words: [
      { word: 'moon', ipa: '/muːn/', meaning: '月', slug: 'moon' },
      { word: 'food', ipa: '/fuːd/', meaning: '食べ物', slug: 'food' },
      { word: 'blue', ipa: '/bluː/', meaning: '青い', slug: 'blue' }
    ]
  },
  long_open_o: {
    symbol: '/ɔː/', reading: 'オー', hint: 'caught の母音', type: 'vowel', level: 'vowel', audioId: 'long-open-o',
    tip: '唇を丸め、深めのオを長く響かせます。',
    words: [
      { word: 'caught', ipa: '/kɔːt/', meaning: 'catch の過去分詞', slug: 'caught' },
      { word: 'law', ipa: '/lɔː/', meaning: '法律', slug: 'law' },
      { word: 'talk', ipa: '/tɔːk/', meaning: '話す', slug: 'talk' }
    ]
  },
  long_schwa_r: {
    symbol: '/əː/', reading: 'アー（曖昧・r系）', hint: 'bird の母音', type: 'vowel', level: 'vowel', audioId: 'long-schwa-r',
    tip: '曖昧母音をベースに、r の響きを感じながら長めに保ちます。',
    words: [
      { word: 'bird', ipa: '/bəːd/', meaning: '鳥', slug: 'bird' },
      { word: 'girl', ipa: '/gəːl/', meaning: '女の子', slug: 'girl' },
      { word: 'nurse', ipa: '/nəːs/', meaning: '看護師', slug: 'nurse' }
    ]
  },
  diph_ai: {
    symbol: '/aɪ/', reading: 'アイ', hint: 'like の母音', type: 'vowel', level: 'vowel', audioId: 'diph-ai',
    tip: '低いアから高いイへ向かう、はっきりした動きにします。',
    words: [
      { word: 'like', ipa: '/laɪk/', meaning: '好き', slug: 'like' },
      { word: 'time', ipa: '/taɪm/', meaning: '時間', slug: 'time' },
      { word: 'five', ipa: '/faɪv/', meaning: '5', slug: 'five' }
    ]
  },
  diph_ou: {
    symbol: '/əʊ/', reading: 'オウ', hint: 'boat の母音', type: 'vowel', level: 'vowel', audioId: 'diph-ou',
    tip: '丸いオから、より閉じたウ方向へ動かします。',
    words: [
      { word: 'boat', ipa: '/bəʊt/', meaning: 'ボート', slug: 'boat' },
      { word: 'home', ipa: '/həʊm/', meaning: '家', slug: 'home' },
      { word: 'road', ipa: '/rəʊd/', meaning: '道路', slug: 'road' }
    ]
  },
  diph_au: {
    symbol: '/aʊ/', reading: 'アウ', hint: 'house の母音', type: 'vowel', level: 'vowel', audioId: 'diph-au',
    tip: '開いた位置から、最後は唇を軽く丸めて閉じます。',
    words: [
      { word: 'house', ipa: '/haʊs/', meaning: '家', slug: 'house' },
      { word: 'mouse', ipa: '/maʊs/', meaning: 'ねずみ', slug: 'mouse' },
      { word: 'town', ipa: '/taʊn/', meaning: '町', slug: 'town' }
    ]
  },
  diph_iə: {
    symbol: '/ɪə/', reading: 'イア', hint: 'ear の母音', type: 'vowel', level: 'vowel', audioId: 'diph-ia',
    tip: '短いイから、あいまいな中央母音へ滑ります。',
    words: [
      { word: 'ear', ipa: '/ɪə/', meaning: '耳', slug: 'ear' },
      { word: 'here', ipa: '/hɪə/', meaning: 'ここに', slug: 'here' },
      { word: 'near', ipa: '/nɪə/', meaning: '近い', slug: 'near' }
    ]
  },
  diph_eə: {
    symbol: '/eə/', reading: 'エア', hint: 'air の母音', type: 'vowel', level: 'vowel', audioId: 'diph-ea',
    tip: 'エから中央母音へ、口の開きが自然にほどける感覚で移動します。',
    words: [
      { word: 'air', ipa: '/eə/', meaning: '空気', slug: 'air' },
      { word: 'chair', ipa: '/tʃeə/', meaning: '椅子', slug: 'chair' },
      { word: 'care', ipa: '/keə/', meaning: '気にかける', slug: 'care' }
    ]
  },
  diph_ʊə: {
    symbol: '/ʊə/', reading: 'ウア', hint: 'tour の母音', type: 'vowel', level: 'vowel', audioId: 'diph-ua',
    tip: '軽く丸めたウから中央音へ移動します。',
    words: [
      { word: 'tour', ipa: '/tʊə/', meaning: 'ツアー', slug: 'tour' },
      { word: 'pure', ipa: '/pjʊə/', meaning: '純粋な', slug: 'pure' },
      { word: 'cure', ipa: '/kjʊə/', meaning: '治療する', slug: 'cure' }
    ]
  },
  diph_ei: {
    symbol: '/eɪ/', reading: 'エイ', hint: 'day の母音', type: 'vowel', level: 'vowel', audioId: 'diph-ei',
    tip: 'エの位置からイへ滑ります。終点に向かう動きが大切です。',
    words: [
      { word: 'day', ipa: '/deɪ/', meaning: '日', slug: 'day' },
      { word: 'name', ipa: '/neɪm/', meaning: '名前', slug: 'name' },
      { word: 'rain', ipa: '/reɪn/', meaning: '雨', slug: 'rain' }
    ]
  },
  diph_oi: {
    symbol: '/ɔɪ/', reading: 'オイ', hint: 'boy の母音', type: 'vowel', level: 'vowel', audioId: 'diph-oi',
    tip: '丸いオからイへ、明確な口の変化を意識します。',
    words: [
      { word: 'boy', ipa: '/bɔɪ/', meaning: '少年', slug: 'boy' },
      { word: 'toy', ipa: '/tɔɪ/', meaning: 'おもちゃ', slug: 'toy' },
      { word: 'coin', ipa: '/kɔɪn/', meaning: '硬貨', slug: 'coin' }
    ]
  },
  p: { symbol: '/p/', reading: '無声音の p', hint: 'pig の子音', type: 'cons', level: 'cons', audioId: 'cons-p', tip: '両唇を閉じて、息だけを一気に放出します。', words: [ { word: 'pig', ipa: '/pɪg/', meaning: '豚', slug: 'pig' }, { word: 'pen', ipa: '/pen/', meaning: 'ペン', slug: 'pen' }, { word: 'map', ipa: '/mæp/', meaning: '地図', slug: 'map' } ] },
  b: { symbol: '/b/', reading: '有声音の b', hint: 'bat の子音', type: 'cons', level: 'cons', audioId: 'cons-b', tip: 'p と同じ閉鎖ですが、声帯を震わせます。', words: [ { word: 'bat', ipa: '/bæt/', meaning: 'バット', slug: 'bat' }, { word: 'bag', ipa: '/bæg/', meaning: 'バッグ', slug: 'bag' }, { word: 'cab', ipa: '/kæb/', meaning: 'タクシー', slug: 'cab' } ] },
  t: { symbol: '/t/', reading: '無声音の t', hint: 'toy の子音', type: 'cons', level: 'cons', audioId: 'cons-t', tip: '舌先を歯茎につけて、はっきり息を破裂させます。', words: [ { word: 'toy', ipa: '/tɔɪ/', meaning: 'おもちゃ', slug: 'toy' }, { word: 'tea', ipa: '/tiː/', meaning: 'お茶', slug: 'tea' }, { word: 'cat', ipa: '/kæt/', meaning: '猫', slug: 'cat' } ] },
  d: { symbol: '/d/', reading: '有声音の d', hint: 'doll の子音', type: 'cons', level: 'cons', audioId: 'cons-d', tip: 't と同じ位置で、声帯を震わせながら破裂させます。', words: [ { word: 'doll', ipa: '/dɒl/', meaning: '人形', slug: 'doll' }, { word: 'dog', ipa: '/dɒg/', meaning: '犬', slug: 'dog' }, { word: 'bed', ipa: '/bed/', meaning: 'ベッド', slug: 'bed' } ] },
  k: { symbol: '/k/', reading: '無声音の k', hint: 'cool の子音', type: 'cons', level: 'cons', audioId: 'cons-k', tip: '舌の後ろ側を軟口蓋に当て、息だけで破裂させます。', words: [ { word: 'cool', ipa: '/kuːl/', meaning: 'かっこいい', slug: 'cool' }, { word: 'key', ipa: '/kiː/', meaning: '鍵', slug: 'key' }, { word: 'back', ipa: '/bæk/', meaning: '後ろ', slug: 'back' } ] },
  g: { symbol: '/g/', reading: '有声音の g', hint: 'goat の子音', type: 'cons', level: 'cons', audioId: 'cons-g', tip: 'k と同じ位置で、声を入れて破裂させます。', words: [ { word: 'goat', ipa: '/gəʊt/', meaning: 'ヤギ', slug: 'goat' }, { word: 'game', ipa: '/geɪm/', meaning: 'ゲーム', slug: 'game' }, { word: 'bag', ipa: '/bæg/', meaning: 'バッグ', slug: 'bag' } ] },
  m: { symbol: '/m/', reading: '鼻音 m', hint: 'man の子音', type: 'cons', level: 'cons', audioId: 'cons-m', tip: '両唇を閉じ、鼻に響かせます。', words: [ { word: 'man', ipa: '/mæn/', meaning: '男性', slug: 'man' }, { word: 'milk', ipa: '/mɪlk/', meaning: '牛乳', slug: 'milk' }, { word: 'room', ipa: '/ruːm/', meaning: '部屋', slug: 'room' } ] },
  n: { symbol: '/n/', reading: '鼻音 n', hint: 'nuts の子音', type: 'cons', level: 'cons', audioId: 'cons-n', tip: '舌先を歯茎につけ、鼻に抜きます。', words: [ { word: 'nuts', ipa: '/nʌts/', meaning: 'ナッツ', slug: 'nuts' }, { word: 'nose', ipa: '/nəʊz/', meaning: '鼻', slug: 'nose' }, { word: 'sun', ipa: '/sʌn/', meaning: '太陽', slug: 'sun' } ] },
  ng: { symbol: '/ŋ/', reading: '鼻音 ng', hint: 'sing の語尾', type: 'cons', level: 'cons', audioId: 'cons-ng', tip: '舌の後ろ側を軟口蓋に当て、鼻に響かせます。', words: [ { word: 'sing', ipa: '/sɪŋ/', meaning: '歌う', slug: 'sing' }, { word: 'ring', ipa: '/rɪŋ/', meaning: '指輪', slug: 'ring' }, { word: 'long', ipa: '/lɒŋ/', meaning: '長い', slug: 'long' } ] },
  tch: { symbol: '/tʃ/', reading: '破擦音 ch', hint: 'church の子音', type: 'cons', level: 'cons', audioId: 'cons-tch', tip: 't の閉鎖から ʃ の摩擦へつなげます。', words: [ { word: 'church', ipa: '/tʃɜːtʃ/', meaning: '教会', slug: 'church' }, { word: 'chair', ipa: '/tʃeə/', meaning: '椅子', slug: 'chair' }, { word: 'watch', ipa: '/wɒtʃ/', meaning: '見る', slug: 'watch' } ] },
  dj: { symbol: '/dʒ/', reading: '破擦音 j', hint: 'jump の子音', type: 'cons', level: 'cons', audioId: 'cons-dj', tip: 'd の閉鎖から ʒ の摩擦へつなげ、声を保ちます。', words: [ { word: 'jump', ipa: '/dʒʌmp/', meaning: '跳ぶ', slug: 'jump' }, { word: 'juice', ipa: '/dʒuːs/', meaning: 'ジュース', slug: 'juice' }, { word: 'bridge', ipa: '/brɪdʒ/', meaning: '橋', slug: 'bridge' } ] },
  f: { symbol: '/f/', reading: '摩擦音 f', hint: 'fan の子音', type: 'cons', level: 'focus', audioId: 'cons-f', tip: '上の前歯を下唇に軽く当て、息だけを流します。', words: [ { word: 'fan', ipa: '/fæn/', meaning: '扇風機', slug: 'fan' }, { word: 'fish', ipa: '/fɪʃ/', meaning: '魚', slug: 'fish' }, { word: 'leaf', ipa: '/liːf/', meaning: '葉', slug: 'leaf' } ] },
  v: { symbol: '/v/', reading: '摩擦音 v', hint: 'van の子音', type: 'cons', level: 'focus', audioId: 'cons-v', tip: 'f と同じ口の形で、声帯を震わせます。', words: [ { word: 'van', ipa: '/væn/', meaning: 'バン', slug: 'van' }, { word: 'very', ipa: '/ˈveri/', meaning: 'とても', slug: 'very' }, { word: 'move', ipa: '/muːv/', meaning: '動く', slug: 'move' } ] },
  theta: { symbol: '/θ/', reading: '摩擦音 th', hint: 'think の子音', type: 'cons', level: 'focus', audioId: 'cons-theta', tip: '舌先を軽く歯の間に出し、声を入れずに息だけ流します。', words: [ { word: 'think', ipa: '/θɪŋk/', meaning: '考える', slug: 'think' }, { word: 'thank', ipa: '/θæŋk/', meaning: '感謝する', slug: 'thank' }, { word: 'bath', ipa: '/bɑːθ/', meaning: '風呂', slug: 'bath' } ] },
  eth: { symbol: '/ð/', reading: '摩擦音 th（有声）', hint: 'this の子音', type: 'cons', level: 'focus', audioId: 'cons-eth', tip: 'θ と同じ位置で、今度は声帯を震わせます。', words: [ { word: 'this', ipa: '/ðɪs/', meaning: 'これ', slug: 'this' }, { word: 'that', ipa: '/ðæt/', meaning: 'あれ', slug: 'that' }, { word: 'mother', ipa: '/ˈmʌðər/', meaning: '母', slug: 'mother' } ] },
  s: { symbol: '/s/', reading: '摩擦音 s', hint: 'sun の子音', type: 'cons', level: 'focus', audioId: 'cons-s', tip: '舌先を歯茎に近づけ、細い息を前へ出します。', words: [ { word: 'sun', ipa: '/sʌn/', meaning: '太陽', slug: 'sun' }, { word: 'see', ipa: '/siː/', meaning: '見る', slug: 'see' }, { word: 'bus', ipa: '/bʌs/', meaning: 'バス', slug: 'bus' } ] },
  z: { symbol: '/z/', reading: '摩擦音 z', hint: 'zip の子音', type: 'cons', level: 'focus', audioId: 'cons-z', tip: 's と同じ位置で、声を乗せます。', words: [ { word: 'zip', ipa: '/zɪp/', meaning: 'ジッパー', slug: 'zip' }, { word: 'zoo', ipa: '/zuː/', meaning: '動物園', slug: 'zoo' }, { word: 'nose', ipa: '/nəʊz/', meaning: '鼻', slug: 'nose' } ] },
  sh: { symbol: '/ʃ/', reading: '摩擦音 sh', hint: 'ship の子音', type: 'cons', level: 'focus', audioId: 'cons-sh', tip: '唇を少し丸め、舌を後ろ寄りにして息を摩擦させます。', words: [ { word: 'ship', ipa: '/ʃɪp/', meaning: '船', slug: 'ship' }, { word: 'she', ipa: '/ʃiː/', meaning: '彼女', slug: 'she' }, { word: 'dish', ipa: '/dɪʃ/', meaning: '皿', slug: 'dish' } ] },
  zh: { symbol: '/ʒ/', reading: '摩擦音 zh', hint: 'measure に現れる音', type: 'cons', level: 'focus', audioId: 'cons-zh', tip: 'ʃ と同じ口の形で、有声にします。', words: [ { word: 'measure', ipa: '/ˈmeʒər/', meaning: '測る', slug: 'measure' }, { word: 'vision', ipa: '/ˈvɪʒən/', meaning: '視覚', slug: 'vision' }, { word: 'usual', ipa: '/ˈjuːʒuəl/', meaning: '通常の', slug: 'usual' } ] },
  h: { symbol: '/h/', reading: '摩擦音 h', hint: 'hat の子音', type: 'cons', level: 'cons', audioId: 'cons-h', tip: '声帯は振動させず、息だけを喉から前へ通します。', words: [ { word: 'hat', ipa: '/hæt/', meaning: '帽子', slug: 'hat' }, { word: 'home', ipa: '/həʊm/', meaning: '家', slug: 'home' }, { word: 'ahead', ipa: '/əˈhed/', meaning: '前方に', slug: 'ahead' } ] },
  w: { symbol: '/w/', reading: '接近音 w', hint: 'way の子音', type: 'cons', level: 'cons', audioId: 'cons-w', tip: '唇を丸めてすぐ次の母音へ滑らかに移ります。', words: [ { word: 'way', ipa: '/weɪ/', meaning: '道', slug: 'way' }, { word: 'win', ipa: '/wɪn/', meaning: '勝つ', slug: 'win' }, { word: 'west', ipa: '/west/', meaning: '西', slug: 'west' } ] },
  j: { symbol: '/j/', reading: '接近音 y', hint: 'yes の子音', type: 'cons', level: 'cons', audioId: 'cons-j', tip: '日本語のヤ行に近いが、より滑らかに母音へ移ります。', words: [ { word: 'yes', ipa: '/jes/', meaning: 'はい', slug: 'yes' }, { word: 'yellow', ipa: '/ˈjeləʊ/', meaning: '黄色', slug: 'yellow' }, { word: 'music', ipa: '/ˈmjuːzɪk/', meaning: '音楽', slug: 'music' } ] },
  r: { symbol: '/r/', reading: '接近音 r', hint: 'red の子音', type: 'cons', level: 'focus', audioId: 'cons-r', tip: '舌先をどこにも触れさせず、少し後ろへ引いて響きを作ります。', words: [ { word: 'red', ipa: '/red/', meaning: '赤い', slug: 'red' }, { word: 'rain', ipa: '/reɪn/', meaning: '雨', slug: 'rain' }, { word: 'right', ipa: '/raɪt/', meaning: '右', slug: 'right' } ] },
  l: { symbol: '/l/', reading: '側面接近音 l', hint: 'lips の子音', type: 'cons', level: 'focus', audioId: 'cons-l', tip: '舌先を歯茎につけ、舌の両側から息を逃がします。', words: [ { word: 'lips', ipa: '/lɪps/', meaning: '唇', slug: 'lips' }, { word: 'light', ipa: '/laɪt/', meaning: '光', slug: 'light' }, { word: 'feel', ipa: '/fiːl/', meaning: '感じる', slug: 'feel' } ] }
};

const IPA_SECTIONS = [
  { id: 'short-vowels', badge: '母音', badgeClass: 'vowel', title: '単一母音（短母音）', subtitle: 'Short Monophthongs', itemIds: ['short_i','short_e','short_ae','short_ox','short_caret','short_uu','short_schwa','short_eps'] },
  { id: 'long-vowels', badge: '母音', badgeClass: 'vowel', title: '単一母音（長母音）', subtitle: 'Long Monophthongs', itemIds: ['long_i','long_aa','long_u','long_open_o','long_schwa_r'] },
  { id: 'diphthongs', badge: '母音', badgeClass: 'vowel', title: '二重母音', subtitle: 'Diphthongs', itemIds: ['diph_ai','diph_ou','diph_au','diph_iə','diph_eə','diph_ʊə','diph_ei','diph_oi'] },
  { id: 'plosives', badge: '子音', badgeClass: 'cons', title: '破裂音', subtitle: 'Plosives', itemIds: ['p','b','t','d','k','g'] },
  { id: 'nasals', badge: '子音', badgeClass: 'cons', title: '鼻音', subtitle: 'Nasals', itemIds: ['m','n','ng'] },
  { id: 'affricates', badge: '子音', badgeClass: 'cons', title: '破擦音', subtitle: 'Affricates', itemIds: ['tch','dj'] },
  { id: 'fricatives', badge: '子音', badgeClass: 'cons', title: '摩擦音', subtitle: 'Fricatives', itemIds: ['f','v','theta','eth','s','z','sh','zh','h'] },
  { id: 'approximants', badge: '子音', badgeClass: 'cons', title: '接近音', subtitle: 'Approximants', itemIds: ['w','j','r'] },
  { id: 'lateral', badge: '子音', badgeClass: 'cons', title: '側面接近音', subtitle: 'Lateral Approximants', itemIds: ['l'] },
};
