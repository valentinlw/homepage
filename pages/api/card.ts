import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == "POST") {
        const { front, back } = req.body
        const result = await prisma.card.create({
            data: {
                front, back,
            },
        })
        return res.json(result)
    }
}