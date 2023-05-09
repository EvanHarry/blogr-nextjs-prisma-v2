import { getServerSession } from 'next-auth/next'
import prisma from '@/lib/prisma'
import { authOptions } from '../auth/[...nextauth]'
import { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  const { title, content } = req.body

  const session = await getServerSession(req, res, authOptions)
  const result = await prisma.post.create({
    data: {
      title,
      content,
      author: { connect: { email: session?.user?.email } }
    }
  })
  res.json(result)
}

export default handler