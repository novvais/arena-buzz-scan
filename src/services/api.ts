const API_BASE_URL = "http://localhost:3001/api";

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
}

export interface SurveySubmission {
  personalInfo: PersonalInfo;
  category: string;
  question: string;
  answer: string;
}

export const api = {
  async submitSurvey(data: SurveySubmission) {
    try {
      const response = await fetch(`${API_BASE_URL}/survey/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Erro ao enviar pesquisa:", error);
      throw error;
    }
  },

  async getQuestions() {
    try {
      const response = await fetch(`${API_BASE_URL}/survey/questions`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Erro ao buscar perguntas:", error);
      throw error;
    }
  },

  async getStats() {
    try {
      const response = await fetch(`${API_BASE_URL}/survey/stats`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Erro ao buscar estatísticas:", error);
      throw error;
    }
  },
};
