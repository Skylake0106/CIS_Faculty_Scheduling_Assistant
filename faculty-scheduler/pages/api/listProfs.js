export default async (req, res) => {
    try {
      const response = await axios.get('https://apex.oracle.com/pls/apex/facultyschedulerasst/proftable/cis/');
      const data = response.data.items;
  
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
