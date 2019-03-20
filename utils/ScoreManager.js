module.exports = {
  GetTypeByScore: score => {
    if (score <= 36) {
      return "nac";
    } else if (score >= 36 && score <= 56) {
      return "mql";
    } else if (score >= 57 && score <= 78) {
      return "sql";
    } else if (score >= 79) {
      return "mvp";
    }

    return "error";
  }
};
