export interface NodeDataItem {
  betweennessCentralityValue?: number;
  community: string;
  frequencyValue?: number;
  link: string[];
  linkData?: { [key: string]: number };
  linkWidths?: { [key: string]: number };
  name: string;
  children?: NodeDataItem[];
}

export const initialData: NodeDataItem[] = [
  {
    "betweennessCentralityValue": 0.16,
    "community": "4",
    "frequencyValue": 153,
    "link": [
      "ニーズ",
      "サービス"
    ],
    "linkData": {
      "サービス": 1.9,
      "ニーズ": 1.95
    },
    "linkWidths": {
      "サービス": 1.9,
      "ニーズ": 1.95
    },
    "name": "お客さま"
  },
  {
    "betweennessCentralityValue": 0.05,
    "community": "6",
    "frequencyValue": 116,
    "link": [],
    "name": "証券"
  },
  {
    "betweennessCentralityValue": 0.12,
    "community": "6",
    "frequencyValue": 66,
    "link": [
      "設立",
      "証券"
    ],
    "linkData": {
      "設立": 2.16,
      "証券": 1.79
    },
    "linkWidths": {
      "設立": 2.16,
      "証券": 1.79
    },
    "name": "岡三"
  },
  {
    "betweennessCentralityValue": 0.19,
    "community": "4",
    "frequencyValue": 58,
    "link": [
      "提供",
      "対面"
    ],
    "linkData": {
      "対面": 2,
      "提供": 2.42
    },
    "linkWidths": {
      "対面": 2,
      "提供": 2.42
    },
    "name": "サービス"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "9",
    "frequencyValue": 48,
    "link": [],
    "name": "経営"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "6",
    "frequencyValue": 41,
    "link": [
      "証券"
    ],
    "linkData": {
      "証券": 2.4
    },
    "linkWidths": {
      "証券": 2.4
    },
    "name": "ビジネス"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "7",
    "frequencyValue": 39,
    "link": [
      "販売"
    ],
    "linkData": {
      "販売": 2
    },
    "linkWidths": {
      "販売": 2
    },
    "name": "会社"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "10",
    "frequencyValue": 39,
    "link": [],
    "name": "情報"
  },
  {
    "betweennessCentralityValue": 0.08,
    "community": "4",
    "frequencyValue": 37,
    "link": [],
    "name": "提供"
  },
  {
    "betweennessCentralityValue": 0.16,
    "community": "8",
    "frequencyValue": 35,
    "link": [
      "社外取締役"
    ],
    "linkData": {
      "社外取締役": 1.9
    },
    "linkWidths": {
      "社外取締役": 1.9
    },
    "name": "監査"
  },
  {
    "betweennessCentralityValue": 0.15,
    "community": "4",
    "frequencyValue": 34,
    "link": [
      "応え",
      "一人ひとり"
    ],
    "linkData": {
      "一人ひとり": 1.79,
      "応え": 2.19
    },
    "linkWidths": {
      "一人ひとり": 1.79,
      "応え": 2.19
    },
    "name": "ニーズ"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "1",
    "frequencyValue": 34,
    "link": [
      "持続"
    ],
    "linkData": {
      "持続": 2.05
    },
    "linkWidths": {
      "持続": 2.05
    },
    "name": "成長"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "11",
    "frequencyValue": 33,
    "link": [
      "密着"
    ],
    "linkData": {
      "密着": 2.14
    },
    "linkWidths": {
      "密着": 2.14
    },
    "name": "地域"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "2",
    "frequencyValue": 33,
    "link": [],
    "name": "株"
  },
  {
    "betweennessCentralityValue": 0.07,
    "community": "8",
    "frequencyValue": 30,
    "link": [
      "取締役会",
      "監査",
      "委員"
    ],
    "linkData": {
      "取締役会": 2.33,
      "委員": 2,
      "監査": 2
    },
    "linkWidths": {
      "取締役会": 2.33,
      "委員": 2,
      "監査": 2
    },
    "name": "取締役"
  },
  {
    "betweennessCentralityValue": 0.01,
    "community": "5",
    "frequencyValue": 29,
    "link": [],
    "name": "運用"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "10",
    "frequencyValue": 29,
    "link": [
      "情報"
    ],
    "linkData": {
      "情報": 1.84
    },
    "linkWidths": {
      "情報": 1.84
    },
    "name": "商品"
  },
  {
    "betweennessCentralityValue": 0.04,
    "community": "3",
    "frequencyValue": 28,
    "link": [
      "貢献"
    ],
    "linkData": {
      "貢献": 2.19
    },
    "linkWidths": {
      "貢献": 2.19
    },
    "name": "社会"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "8",
    "frequencyValue": 26,
    "link": [
      "監査"
    ],
    "linkData": {
      "監査": 8.1
    },
    "linkWidths": {
      "監査": 8.1
    },
    "name": "委員"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "2",
    "frequencyValue": 23,
    "link": [
      "株"
    ],
    "linkData": {
      "株": 2.92
    },
    "linkWidths": {
      "株": 2.92
    },
    "name": "日本"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "6",
    "frequencyValue": 22,
    "link": [
      "岡三"
    ],
    "linkData": {
      "岡三": 2.07
    },
    "linkWidths": {
      "岡三": 2.07
    },
    "name": "オンライン"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "4",
    "frequencyValue": 21,
    "link": [],
    "name": "対面"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "3",
    "frequencyValue": 21,
    "link": [
      "社会"
    ],
    "linkData": {
      "社会": 2.05
    },
    "linkWidths": {
      "社会": 2.05
    },
    "name": "実現"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "4",
    "frequencyValue": 20,
    "link": [
      "提供"
    ],
    "linkData": {
      "提供": 1.86
    },
    "linkWidths": {
      "提供": 1.86
    },
    "name": "価値"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "7",
    "frequencyValue": 18,
    "link": [],
    "name": "販売"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "3",
    "frequencyValue": 16,
    "link": [
      "社会"
    ],
    "linkData": {
      "社会": 3.45
    },
    "linkWidths": {
      "社会": 3.45
    },
    "name": "サステナビリティ"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "8",
    "frequencyValue": 15,
    "link": [],
    "name": "取締役会"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "1",
    "frequencyValue": 15,
    "link": [],
    "name": "持続"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "4",
    "frequencyValue": 14,
    "link": [],
    "name": "一人ひとり"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "6",
    "frequencyValue": 13,
    "link": [
      "岡三"
    ],
    "linkData": {
      "岡三": 2.12
    },
    "linkWidths": {
      "岡三": 2.12
    },
    "name": "アセットマネジメント"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "3",
    "frequencyValue": 13,
    "link": [],
    "name": "貢献"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "6",
    "frequencyValue": 11,
    "link": [],
    "name": "設立"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "8",
    "frequencyValue": 9,
    "link": [],
    "name": "社外取締役"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "9",
    "frequencyValue": 9,
    "link": [
      "経営"
    ],
    "linkData": {
      "経営": 1.86
    },
    "linkWidths": {
      "経営": 1.86
    },
    "name": "哲学"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "4",
    "frequencyValue": 7,
    "link": [],
    "name": "応え"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "5",
    "frequencyValue": 7,
    "link": [
      "運用"
    ],
    "linkData": {
      "運用": 1.82
    },
    "linkWidths": {
      "運用": 1.82
    },
    "name": "商品開発"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "8",
    "frequencyValue": 6,
    "link": [
      "監査"
    ],
    "linkData": {
      "監査": 2.11
    },
    "linkWidths": {
      "監査": 2.11
    },
    "name": "会計監査人"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "11",
    "frequencyValue": 6,
    "link": [],
    "name": "密着"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "8",
    "frequencyValue": 6,
    "link": [
      "監査"
    ],
    "linkData": {
      "監査": 1.9
    },
    "linkWidths": {
      "監査": 1.9
    },
    "name": "定期"
  },
  {
    "betweennessCentralityValue": 0,
    "community": "5",
    "frequencyValue": 5,
    "link": [
      "運用"
    ],
    "linkData": {
      "運用": 2.38
    },
    "linkWidths": {
      "運用": 2.38
    },
    "name": "パフォーマンス"
  }
];