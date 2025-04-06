import { ArrowRight } from 'lucide-react';

const workflowSteps = [
  {
    number: "01",
    title: "カウンセリング",
    description: "お客様のご要望やイメージをヒアリング"
  },
  {
    number: "02",
    title: "香りのデザイン",
    description: "コンセプトに基づいた香りの設計"
  },
  {
    number: "03",
    title: "サンプル作成",
    description: "試作品の製作とテスト"
  },
  {
    number: "04",
    title: "最終調整",
    description: "フィードバックを反映した調整"
  }
];

export function Workflow() {
  return (
    <section className="py-20 bg-[#e8eaf6]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#1a237e] mb-12 text-center">ワークフロー</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {workflowSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-[#1a237e] mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-[#1a237e] mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < workflowSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-[#1a237e]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}