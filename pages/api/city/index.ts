import { NextApiRequest, NextApiResponse } from 'next'
import data from '../../../db/city-list.json'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  const id = _req.query.id as string

  try {
    if (!Array.isArray(data)) {
      throw new Error('Cannot find city data')
    }

    res.status(200).json(data.filter(v => v.id === parseInt(id))[0])
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
