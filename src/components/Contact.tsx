import { useState } from 'react';
import { Briefcase, FileText, Users, MessageSquare } from 'lucide-react';
import { LoadingSpinner } from './ui/LoadingSpinner';
import { FormSuccess } from './ui/FormSuccess';
import { FormError } from './ui/FormError';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      
      // フォームデータをiframeで送信
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://docs.google.com/forms/d/e/1FAIpQLSdcd66zauwwcoNZ1kff8axr_mFGxRmCIJoq6FuhiNtpZhfoeQ/formResponse';
      form.target = 'hidden_iframe';
      
      // フォームデータを追加
      const entries = [
        ['entry.377367744', formData.get('entry.377367744')],
        ['entry.920564048', formData.get('entry.920564048')],
        ['entry.214829368', formData.get('entry.214829368')],
        ['entry.634896786', formData.get('entry.634896786')]
      ];
      
      entries.forEach(([name, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value as string;
        form.appendChild(input);
      });
      
      iframe.name = 'hidden_iframe';
      document.body.appendChild(form);
      
      form.submit();
      
      // クリーンアップ
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
      }, 1000);

      setSubmitStatus('success');
      e.currentTarget.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#00796b] mb-12 text-center">お問い合わせ</h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* 左側: お問い合わせ内容とその他の情報 */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-[#00796b] mb-6">お問い合わせ内容</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-[#00796b]" />
                  <span className="text-gray-700">OEM・香りの開発依頼</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#00796b]" />
                  <span className="text-gray-700">香りの測定・分析依頼</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#00796b]" />
                  <span className="text-gray-700">ブースの演出・空間デザイン</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-[#00796b]" />
                  <span className="text-gray-700">講演・取材依頼</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-[#00796b]" />
                  <span className="text-gray-700">その他の相談について</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-[#00796b] mb-6">お問い合わせの流れ</h3>
              <ol className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#00796b] text-white rounded-full flex items-center justify-center">1</span>
                  <span className="text-gray-700">フォームに必要事項を入力</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#00796b] text-white rounded-full flex items-center justify-center">2</span>
                  <span className="text-gray-700">担当者が内容を確認</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#00796b] text-white rounded-full flex items-center justify-center">3</span>
                  <span className="text-gray-700">2営業日以内にご連絡</span>
                </li>
              </ol>
            </div>
          </div>

          {/* 右側: お問い合わせフォーム */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-[#00796b] mb-6">お問い合わせフォーム</h3>
            <p className="text-gray-600 mb-6">
              以下のフォームに必要事項をご記入ください。内容を確認後、担当者よりご連絡させていただきます。
            </p>
            
            {submitStatus === 'success' && (
              <FormSuccess message="お問い合わせを受け付けました。" />
            )}
            {submitStatus === 'error' && (
              <FormError message="送信に失敗しました。時間をおいて再度お試しください。" />
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                  お問い合わせ種別 <span className="text-red-500">*</span>
                </label>
                <select
                  id="type"
                  name="entry.377367744"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796b] focus:border-transparent"
                >
                  <option value="">選択してください</option>
                  <option value="OEM・香りの開発依頼">OEM・香りの開発依頼</option>
                  <option value="香りの測定・分析依頼">香りの測定・分析依頼</option>
                  <option value="ブースの演出・空間デザイン">ブースの演出・空間デザイン</option>
                  <option value="講演・取材依頼">講演・取材依頼</option>
                  <option value="その他の相談について">その他の相談について</option>
                </select>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="entry.920564048"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796b] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  電話番号 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="entry.214829368"
                  required
                  pattern="[0-9\-]*"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796b] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="entry.634896786"
                  required
                  rows={4}
                  placeholder="具体的な内容をご記入ください"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796b] focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00796b] text-white py-3 rounded-lg hover:bg-[#004d40] transition-colors disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <LoadingSpinner />
                    <span>送信中...</span>
                  </div>
                ) : (
                  '送信する'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}