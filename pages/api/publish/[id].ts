import prisma from '@/lib/prisma'
import { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  const postId = req.query.id as string
  const post = await prisma.post.update({
    where: { id: postId },
    data: { published: true }
  })
  res.json(post)
}

export default handler