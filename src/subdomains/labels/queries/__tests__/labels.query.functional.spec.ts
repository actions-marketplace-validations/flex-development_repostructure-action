/**
 * @file Functional Tests - LabelsQuery
 * @module labels/queries/tests/functional/LabelsQuery
 */

import data from '#fixtures/api.github.com/graphql.json' assert { type: 'json' }
import { RepositoryQuery } from '#src/queries'
import TestSubject from '../labels.query'

vi.mock('#src/queries/repository.query', () => ({ default: vi.fn() }))

describe('functional:labels/queries/LabelsQuery', () => {
  describe('constructor', () => {
    it('should extend RepositoryQuery', () => {
      // Arrange
      const params: Record<'owner' | 'repo', string> = {
        owner: data.data.organization.login,
        repo: data.data.repository.name
      }

      // Act
      new TestSubject(params)

      // Expect
      expect(RepositoryQuery).toHaveBeenCalledOnce()
      expect(RepositoryQuery).toHaveBeenCalledWith(params)
    })
  })
})
