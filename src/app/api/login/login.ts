import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log("api/login.tsx")
    const { name, password } = req.body

    const user = await prisma.user.findUnique({
      where: { name },
    })

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '2h' })
      res.status(200).json({ token })
    } else {
      res.status(401).json({ message: 'Invalid credentials' })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}