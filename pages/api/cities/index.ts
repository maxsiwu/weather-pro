import { NextApiRequest, NextApiResponse } from 'next'
import data from '../../../db/city-list.json'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(data)) {
      throw new Error('Cannot find city data')
    }

    res.status(200).json(data.filter(v => v.name === 'Vancouver'))
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
