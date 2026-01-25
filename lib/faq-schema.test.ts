import { generateFAQSchema, getFAQSchemaScript } from './faq-schema';
import { faqItems } from './faq-data';

describe('FAQ Schema', () => {
  describe('generateFAQSchema', () => {
    it('should return valid FAQPage schema structure', () => {
      const schema = generateFAQSchema();

      expect(schema['@context']).toBe('https://schema.org');
      expect(schema['@type']).toBe('FAQPage');
      expect(schema.mainEntity).toBeDefined();
      expect(Array.isArray(schema.mainEntity)).toBe(true);
    });

    it('should include all FAQ items', () => {
      const schema = generateFAQSchema();

      expect(schema.mainEntity).toHaveLength(faqItems.length);
    });

    it('should have correct Question structure for each item', () => {
      const schema = generateFAQSchema();

      schema.mainEntity.forEach((item, index) => {
        expect(item['@type']).toBe('Question');
        // eslint-disable-next-line security/detect-object-injection
        expect(item.name).toBe(faqItems[index].question);
        expect(item.acceptedAnswer).toBeDefined();
        expect(item.acceptedAnswer['@type']).toBe('Answer');
        // eslint-disable-next-line security/detect-object-injection
        expect(item.acceptedAnswer.text).toBe(faqItems[index].answer);
      });
    });

    it('should map questions correctly', () => {
      const schema = generateFAQSchema();

      expect(schema.mainEntity[0].name).toBe(
        'Como funciona o primeiro atendimento?'
      );
      expect(schema.mainEntity[1].name).toBe('Quanto tempo dura cada sessão?');
    });
  });

  describe('getFAQSchemaScript', () => {
    it('should return valid JSON string', () => {
      const schemaString = getFAQSchemaScript();

      expect(() => JSON.parse(schemaString)).not.toThrow();
    });

    it('should contain FAQPage type', () => {
      const schemaString = getFAQSchemaScript();

      expect(schemaString).toContain('"@type":"FAQPage"');
    });

    it('should contain schema.org context', () => {
      const schemaString = getFAQSchemaScript();

      expect(schemaString).toContain('"@context":"https://schema.org"');
    });

    it('should be parseable back to the same schema', () => {
      const schemaString = getFAQSchemaScript();
      const parsed = JSON.parse(schemaString);
      const original = generateFAQSchema();

      expect(parsed).toEqual(original);
    });
  });
});
