const posts = [
    {
      id: 1,
      title: 'Welcome to Kanxi Cleaning Services!',
      href: '#',
      description:
        'The idea for Kanxi Cleaning Services was born out of a simple observation: finding reliable and high-quality cleaning services can be a daunting task.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'CTO', href: '#' },
      author: {
        name: 'Manish Maharjan',
        role: 'Founder / CTO',
        href: '#',
        imageUrl:
          'https://i.postimg.cc/nrd13LFs/ME.png' },
    },
    // More posts...
    {
        id: 2,
        title: 'A Message from Our Director',
        href: '#',
        description:'As the directors of Kanxi Cleaning Services, we are committed to ensuring that our companys mission and values are upheld in every aspect of our operations.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Operation', href: '#' },
        author: {
          name: 'Pranita Rai',
          role: 'Co-Founder / Director',
          href: '#',
          imageUrl:
            'https://i.postimg.cc/WbBZTZHN/Screenshot-2024-07-16-105003.png' },
      },
      {
        id: 3,
        title: 'A Word from Our Marketing Head',
        href: '#',
        description:
          'At Kanxi Cleaning Services, we believe in a customer-centric approach to marketing. Our goal is not just to promote our services but to genuinely understand and fulfill your needs.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'Anjal Shrestha',
          role: 'Co-Founder / Marketing Head',
          href: '#',
          imageUrl:
            'https://i.postimg.cc/MTpMdmvD/Screenshot-2024-07-16-100435.png' },
      },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl 	background-image: ;">Join Us!</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
             Take this opportunity to lead a hassle
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  