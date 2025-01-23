import URL from "../models/url.model.js";
import shortid from "shortid";

export const shortener = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        success: false,
        message: "Please provide the url.",
      });
    }

    const existingUrl = await URL.findOne({ longUrl: url });

    if (existingUrl) {
      return res.status(201).json({
        success: true,
        url: existingUrl,
        message: "URL shortened successfully.",
      });
    }

    const urlCode = shortid.generate();

    const newShortUrl = `http://localhost:3000/url/${urlCode}`;

    const newURL = await URL.create({
      longUrl: url,
      shortUrl: newShortUrl,
      urlCode:urlCode
    });

    return res.status(201).json({
      success: true,
      url: newURL,
      message: "URL shortened successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const getStats = async (req, res) => {
  try {
    const { id } = req.params;

    const url = await URL.findById(id);

    if (!url) {
      return res.status(400).json({
        success: false,
        message: "URL may be deleted",
      });
    }

    return res.status(200).json({
      success: true,
      url: url,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const deleteUrl = async (req, res) => {
  try {
    const { id } = req.params;

    const url = await URL.findByIdAndDelete(id);

    if (!url) {
      return res.status(500).json({
        success: false,
        message: "URL not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "URL deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const updateShortUrl = async (req, res) => {
  try {
    const { id } = req.params;

    const urlCode = shortid.generate();
    const newShortUrl = `http://localhost:3000/url/${urlCode}`;

    const url = await URL.findByIdAndUpdate(
      id,
      {
        shortUrl: newShortUrl,
        urlCode:urlCode
      },
      {
        new: true,
      }
    );

    if (!url) {
      return res.status(500).json({
        success: false,
        message: "URL not found.",
      });
    }
    return res.status(200).json({
      success: true,
      url: url,
      message: "URL updated successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const accessURL = async (req, res) => {
  try {
    const { code } = req.params;

    const url = await URL.findOne({urlCode:code});

    if (!url) {
      return res.status(500).json({
        success: false,
        message: "URL not found.",
      });
    }
    else{
        url.accessCount += 1
        await url.save();
    }
    return res.redirect(url.longUrl);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
