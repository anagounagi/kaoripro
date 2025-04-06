export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date))
}

export function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export function generateMetadata(title: string, description: string) {
  return {
    title: `${title} | Air Of Fragrance`,
    description,
    openGraph: {
      title,
      description,
      images: ['https://kaori.aof-aroma.com/ogp.jpg'],
    },
  }
}