import Image from "next/image";

const phoneNumber = "092-863-6716";

const services = [
  {
    title: "屋根工事",
    description:
      "屋根のズレ、傷み、葺き替えなど、住まいの状態を確認したうえで必要な工事をご提案します。"
  },
  {
    title: "雨どい工事",
    description:
      "破損、詰まり、勾配不良など、雨水まわりの不具合を点検し、建物を長く守る施工を行います。"
  },
  {
    title: "リフォーム工事",
    description:
      "屋根まわりを中心に、暮らしの不安や住まいの劣化に合わせて丁寧に対応します。"
  }
];

const strengths = [
  "施工歴34年の職人が直接訪問",
  "お問い合わせ後の営業電話なし",
  "中間業者を通さず自社で材料加工",
  "TOTOリモデルクラブ・セキスイ認定工事店"
];

const warningSigns = ["雨漏りがある", "築20年以上", "雨どいが破損している"];

const flow = [
  ["1", "現場調査", "ご都合のよい日時に合わせて、屋根や雨どいの状態を確認します。"],
  ["2", "無料お見積もり", "必要な工事内容と費用をわかりやすくご説明します。"],
  ["3", "打ち合わせ", "不安な点やご希望を伺い、納得いただいてから進めます。"],
  ["4", "施工開始", "日程を調整し、近隣にも配慮しながら丁寧に施工します。"],
  ["5", "施工完了", "完了後に仕上がりをご確認いただき、必要なご説明を行います。"]
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader" aria-label="サイトヘッダー">
        <a className="brand" href="#top" aria-label="トップへ戻る">
          <span className="brandMark">う</span>
          <span>
            <strong>エクセレントショップうたや</strong>
            <small>福岡県全域・近隣エリアの屋根・雨どい工事</small>
          </span>
        </a>
        <nav className="nav" aria-label="主要ナビゲーション">
          <a href="#services">業務案内</a>
          <a href="#strengths">選ばれる理由</a>
          <a href="#flow">施工の流れ</a>
          <a href="#company">会社概要</a>
        </nav>
        <a className="headerCall" href={`tel:${phoneNumber.replaceAll("-", "")}`}>
          {phoneNumber}
        </a>
      </header>

      <section id="top" className="hero">
        <Image
          className="heroImage"
          src="/images/roof-hero.png"
          alt="住宅の屋根と雨どいを丁寧に施工する職人"
          fill
          priority
          sizes="100vw"
        />
        <div className="heroShade" />
        <div className="heroContent">
          <p className="eyebrow">屋根工事・雨樋工事・リフォーム工事</p>
          <h1>福岡県全域・近隣エリアに対応。屋根・雨どい工事は職人本人へ。</h1>
          <p className="lead">
            福岡を中心に、県外の近隣エリアまでお伺いします。見積もり無料。
            お問い合わせ後の営業電話はいたしません。
          </p>
          <div className="heroActions">
            <a className="primaryButton" href={`tel:${phoneNumber.replaceAll("-", "")}`}>
              電話で相談する
              <span>{phoneNumber}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="noticeBand" aria-label="主な特徴">
        <div>
          <strong>見積無料</strong>
          <span>屋根の状態を見てからご説明します</span>
        </div>
        <div>
          <strong>営業電話なし</strong>
          <span>相談だけでも安心です</span>
        </div>
        <div>
          <strong>受付 7:00-18:00</strong>
          <span>休業日は不定休です</span>
        </div>
      </section>

      <section id="services" className="section">
        <div className="sectionIntro">
          <p className="eyebrow">Services</p>
          <h2>住まいを雨から守る、屋根まわりの工事。</h2>
          <p>
            屋根は外から見ただけでは劣化が分かりにくい場所です。雨漏りや雨どいの破損など、
            気になる症状があれば早めにご相談ください。
          </p>
        </div>
        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="strengths" className="splitSection">
        <div>
          <p className="eyebrow">Why Utaya</p>
          <h2>相談しやすさと、職人の目が届く安心感。</h2>
          <p>
            中間業者を通さず、材料の加工も自社で行うことで、必要な工事を適正な価格でご提供します。
            ご依頼主のみなさまが安心して暮らせるよう、徹底した施工とサポートを大切にしています。
          </p>
        </div>
        <ul className="checkList">
          {strengths.map((strength) => (
            <li key={strength}>{strength}</li>
          ))}
        </ul>
      </section>

      <section className="maintenance">
        <div className="sectionIntro">
          <p className="eyebrow">Maintenance</p>
          <h2>こんな時は点検のタイミングです。</h2>
        </div>
        <div className="signGrid">
          {warningSigns.map((sign) => (
            <div className="signItem" key={sign}>
              {sign}
            </div>
          ))}
        </div>
      </section>

      <section id="flow" className="section">
        <div className="sectionIntro">
          <p className="eyebrow">Flow</p>
          <h2>現場調査から施工完了までの流れ。</h2>
        </div>
        <ol className="flowList">
          {flow.map(([number, title, description]) => (
            <li key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="company" className="companySection">
        <div>
          <p className="eyebrow">Company</p>
          <h2>会社概要</h2>
          <p>
            福岡県全域を中心に、県外の近隣エリアでも、屋根工事、雨どい工事、
            リフォーム工事を行っています。
          </p>
        </div>
        <dl className="companyTable">
          <div>
            <dt>社名</dt>
            <dd>エクセレントショップうたや</dd>
          </div>
          <div>
            <dt>代表</dt>
            <dd>歌谷 義隆</dd>
          </div>
          <div>
            <dt>所在地</dt>
            <dd>〒814-0171 福岡県福岡市早良区野芥7丁目39-1</dd>
          </div>
          <div>
            <dt>電話</dt>
            <dd>092-863-6716</dd>
          </div>
          <div>
            <dt>FAX</dt>
            <dd>092-863-6919</dd>
          </div>
          <div>
            <dt>受付時間</dt>
            <dd>7:00-18:00 / 不定休</dd>
          </div>
        </dl>
      </section>

      <section id="contact" className="contactSection">
        <p className="eyebrow">Contact</p>
        <h2>屋根・雨どいのこと、まずはお気軽にご相談ください。</h2>
        <p>
          雨漏り、築年数、雨どいの破損など、気になることがあれば職人が直接お伺いします。
        </p>
        <a className="primaryButton large" href={`tel:${phoneNumber.replaceAll("-", "")}`}>
          電話で相談する
          <span>{phoneNumber}</span>
        </a>
      </section>
    </main>
  );
}
