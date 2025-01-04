import image01 from '/src/assets/image/skill01.png';
import image02 from '/src/assets/image/skill02.png';
import image03 from '/src/assets/image/skill03.png';

// JSONデータ形式の確認: .js形式ならexport defaultが必要。
export default {
  skill: [
    {
      title: 'フロントエンド開発',
      href: '',
      image: image01,
      description:
        '基本的な静的なサイトからAstroを用いたブログサイトなど幅広く対応可能です。',
    },
    {
      title: 'Webデザイン',
      href: '',
      image: image02,
      description:
        'Figmaを用いて、ユーザーのニーズに答える直感的なUIデザインを制作することができます。',
    },
    {
      title: 'コーヒーを淹れる',
      href: '',
      image: image03,
      description:
        '日常的に焙煎や抽出を行い、ラテアートのスキルも持っています。',
    },
  ],
};
